import {
  buildAsyncState,
  buildAsyncActions,
  buildAsyncReducers,
} from '@thecodingmachine/redux-toolkit-wrapper'

import { createAction, nanoid } from '@reduxjs/toolkit'

const addTodo = createAction('init', function prepare(text) {
  console.log(text)
  return {
    payload: {
      colorScheme: "dark", lang: "fr"
    },
  }
})

export default {
  initialState: buildAsyncState(),
  action: buildAsyncActions('settings/status', async (args, { dispatch, getState }) => {
    console.log("Settings", args)
    // Timeout to fake waiting some process
    // Remove it, or keep it if you want display a beautiful splash screen ;)
    //await new Promise((resolve) => setTimeout(resolve, 1000))
    //console.log(buildAsyncReducers().fulfilled())
    //{lang: "it" }, { payload: {colorScheme: args.colorScheme}, type: 'item' }
    return { ...getState().settings.item, ...args }
    //dispatch({ type: 'init', payload: { colorScheme: args.colorScheme, lang: "fr" } })
  }),
  reducers: buildAsyncReducers()
}

/*
{
  //errorKey: false,
  //loadingKey: false,
  //itemKey: 'item'
}*/
