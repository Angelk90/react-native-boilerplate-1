import React from 'react';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';

const withModalProvider = (Component) => (props) => {
  return (
    <BottomSheetModalProvider>
      <Component {...props} />
    </BottomSheetModalProvider>
  );
};

export default withModalProvider;
