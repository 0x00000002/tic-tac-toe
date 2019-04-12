const _settings = {
  siteName: 'Tic Tac Toe'
}

export const get = () => {
  let settings = _settings
  if (process.env.NODE_ENV === 'production') {
    // The app is a production packaged build
    if (process.env.REACT_APP_TARGET === 'staging') {
      // Use staging settings
      settings = {
        siteName: `${_settings.siteName} (staging)`
      }
    } else {
      settings = {
        siteName: _settings.siteName
      }
    }
  } else if (process.env.NODE_ENV === 'development') {
    // The app is in development mode
    settings = {
      siteName: `${_settings.siteName} (development)`
    }
  }
  return settings
}

const settings = get()

export default settings
