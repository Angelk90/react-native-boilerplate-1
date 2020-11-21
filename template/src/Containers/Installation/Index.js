import React, {
  useState,
  useEffect,
  useCallback,
  useMemo,
  useRef,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import { Text, Button, RadioButton } from 'react-native-paper';
import {
  Common,
  Fonts,
  Gutters,
  Layout,
  Images,
  Colors,
  ColorsDarkMode,
  Svgs,
} from '@/Theme';
import { useTranslation } from 'react-i18next';
import Settings from '@/Store/Settings/Init';
const { width: SCREEN_WIDTH } = Dimensions.get('screen');
import { navigateAndSimpleReset } from '@/Navigators/Root';

import AppIntroSlider from 'react-native-app-intro-slider';

import {
  BottomSheetModalProvider,
  useBottomSheetModal,
  BottomSheetOverlay,
} from '@gorhom/bottom-sheet';
import withModalProvider from './withModalProvider';
import BlurredBackground from './BlurredBackground';

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 320,
    height: 320,
    marginVertical: 32,
    resizeMode: 'stretch',
  },
  text: {
    color: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'center',
  },
  title: {
    fontSize: 22,
    color: 'white',
    textAlign: 'center',
  },
  blurView: {
    ...StyleSheet.absoluteFillObject,
  },
  container: {
    ...StyleSheet.absoluteFillObject,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden',
  },
  androidContainer: {
    backgroundColor: 'rgba(255,255,255, 0.95)',
  },
  indicator: {
    alignSelf: 'center',
    width: (8 * SCREEN_WIDTH) / 100,
    height: 5,
    borderRadius: 4,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});

const IndexInstallationContainer = (props) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const settings = useSelector((state) => state.settings);
  const { present, dismiss } = useBottomSheetModal();
  const backgroundColor =
    settings.item.colorScheme === 'dark'
      ? ColorsDarkMode.backgroundPrimary
      : Colors.backgroundPrimary;

  const theme = [
    { title: 'Light', value: 'light' },
    { title: 'Dark', value: 'dark' }
  ];

  const bottomSheetTheme = useCallback(
    (newValue, id) => {
      present(
        <View style={{ flex: 1, backgroundColor }}>
          <Text>{settings.item.colorScheme}</Text>
          {theme.map(({ title, value }) => {
            return (
              <TouchableWithoutFeedback
                key={value}
                onPress={() => {
                  //dismiss();
                  changeButtonTheme(value);
                }}>
                <View
                  style={[
                    Layout.row,
                    Layout.rowHCenter,
                    Gutters.tinyVMargin,
                    Gutters.tinyHMargin,
                  ]}>
                  <View style={[Layout.fill]}>
                    <Text>{title}</Text>
                  </View>
                  {settings.item.colorScheme === value ? (
                    <Svgs.RadioButton size={32} color={backgroundColor} />
                  ) : (
                    <Svgs.RadioButtonEmpty size={32} color={backgroundColor} />
                  )}
                </View>
              </TouchableWithoutFeedback>
            );
          })}
        </View>,
        {
          snapPoints: ['25%'],
          animationDuration: 10,
          overlayComponent: BottomSheetOverlay,
          overlayOpacity: 0.5,
          dismissOnOverlayPress: true,
          //handleComponent: handle,
          //backgroundComponent: BlurredBackground,
          //onChange: handleChange,
        }
      );
    },
    [settings]
  );

  const lang = [
    { title: 'English', value: 'en' },
    { title: 'France', value: 'fr' },
    { title: 'Italy', value: 'it' },
  ];

  /*
  <View style={Layout.column}>
  <Svgs.RadioButton size={32} color={backgroundColor}/>
  <Svgs.RadioButtonEmpty size={32} color={backgroundColor}/>
  </View>
  */

  const bottomSheetLang = () =>
      present(
        <View style={{ flex: 1, backgroundColor }}>
          <Text>{settings.item.lang}</Text>
          {lang.map(({ title, value }) => {
            return (
              <TouchableWithoutFeedback
                key={value}
                onPress={() => {
                  //dismiss();
                  changeButtonLang(value);
                }}>
                <View
                  style={[
                    Layout.row,
                    Layout.rowHCenter,
                    Gutters.tinyVMargin,
                    Gutters.tinyHMargin,
                  ]}>
                  <View style={[Layout.fill]}>
                    <Text>{title}</Text>
                  </View>
                  {settings.item.lang === value ? (
                    <Svgs.RadioButton size={32} color={backgroundColor} />
                  ) : (
                    <Svgs.RadioButtonEmpty size={32} color={backgroundColor} />
                  )}
                </View>
              </TouchableWithoutFeedback>
            );
          })}
        </View>,
        {
          snapPoints: ['25%'],
          animationDuration: 10,
          overlayComponent: BottomSheetOverlay,
          overlayOpacity: 0.5,
          dismissOnOverlayPress: true,
          //handleComponent: handle,
          //backgroundComponent: BlurredBackground,
          //onChange: handleChange,
        }
      );

      const a = (
        <Button
          style={[Gutters.largeHMargin, Gutters.largeBMargin]}
          raised
          mode="contained"
          onPress={bottomSheetLang}>
          {t('change.language')}
        </Button>
      );

      const b = (
        <Button
          style={[Gutters.largeHMargin, Gutters.largeBMargin]}
          raised
          mode="contained"
          onPress={bottomSheetTheme}>
          {t('change.mode')}
        </Button>
      );

  const slides = [
    {
      key: 'one',
      title: t('welcome'),
      text: '',
      image: Images.logo,
      backgroundColor: '#2196f3',
    },
    {
      key: 'two',
      title: t('change.language'),
      text: '',
      backgroundColor: '#ffc107',
      svgs: <Svgs.Language fill={backgroundColor} size={128} />,
      button: a
    },
    {
      key: 'three',
      title: t('change.mode'),
      text: '',
      backgroundColor: '#4caf50',
      svgs: <Svgs.Theme fill={backgroundColor} size={128} />,
      button: b
    },
  ];

  const changeTheme = () => {
    dispatch(
      Settings.action({
        colorScheme: settings.item.colorScheme === 'dark' ? 'ligth' : 'dark',
      })
    );
  };

  const changeButtonTheme = (colorScheme) => {
    dispatch(Settings.action({ ...settings.item, colorScheme }));
  };

  const changeButtonLang = (lang) => {
    dispatch(Settings.action({ ...settings.item, lang }));
  };

  const openBottom = () => setState((prev) => ({ ...prev, open: !prev.open }));

  const _renderItem = ({ item }) => {
    return (
      <View style={[styles.slide, { backgroundColor: item.backgroundColor }]}>
        {item.image && <Image source={item.image} style={styles.image} />}
        {item.key === 'one' && <Text style={styles.title}>{item.title}</Text>}
        {item.svgs && <View style={Gutters.smallVMargin}>{item.svgs}</View>}
        {item.button && <View style={Gutters.smallVMargin}>{item.button}</View>}
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };

  const _onDone = () => {
    //console.log(props)
    //props.navigation.navigate('Login');
    navigateAndSimpleReset('Login');
  };

  const [state, setState] = useState({
    open: false,
  });

  const { open } = state;

  const handle = () => {
    return (
      <View
        style={{
          paddingHorizontal: 16,
          paddingVertical: 5,
          backgroundColor,
        }}>
        <View
          style={[
            styles.indicator,
            {
              backgroundColor:
                settings.item.colorScheme === 'light'
                  ? 'rgba(0, 0, 0, 0.25)'
                  : 'rgba(255, 255, 255, 0.25)',
            },
          ]}
        />
      </View>
    );
  };

  return (
    <>
      <AppIntroSlider
        renderItem={_renderItem}
        data={slides}
        onDone={_onDone}
        nextLabel={t('next')}
        doneLabel={t('done')}
      />
    </>
  );
};

/*
<Button
  style={styles.text}
  onPress={() => changeButtonTheme('ligth')}>
  Ligth
</Button>
<Button
  style={styles.text}
  onPress={() => changeButtonTheme('dark')}>
  Dark
</Button>

{open && (
  <BottomSheet
    ref={bottomSheetRef}
    snapPoints={snapPoints}
    initialSnapIndex={0}
    onChange={handleSheetChanges}
    backgroundComponent={() => (
      <View
        style={{ flex: 1, backgroundColor: 'blue' }}
        onTouchEnd={() => openBottom()}
      />
    )}
    handleComponent={handle}>
  </BottomSheet>
)}
*/

//export default IndexInstallationContainer;
export default withModalProvider(IndexInstallationContainer);
