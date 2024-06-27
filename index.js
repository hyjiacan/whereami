function start() {
  var els = {
    latitude: document.querySelector('#latitude'),
    longitude: document.querySelector('#longitude'),
    altitude: document.querySelector('#altitude'),
    accuracy: document.querySelector('#accuracy'),
    altitudeAccuracy: document.querySelector('#altitudeAccuracy'),
    timestamp: document.querySelector('#timestamp'),
    err: document.querySelector('#err')
  }

  if (!navigator.geolocation) {
    els.err.textContent = '你的浏览器不支持地理位置'
    return
  }


  function success(position) {
    const latitude = position.coords.latitude
    const longitude = position.coords.longitude
    const altitude = position.coords.altitude
    const accuracy = position.coords.accuracy
    const altitudeAccuracy = position.coords.altitudeAccuracy
    const timestamp = position.timestamp

    els.timestamp.textContent = timestamp === null ? '<未知>' : new Date(timestamp).toLocaleString()
    els.latitude.textContent = latitude === null ? '<未知>' : latitude.toFixed(8)
    els.longitude.textContent = longitude === null ? '<未知>' : longitude.toFixed(8)
    els.altitude.textContent = altitude === null ? '<未知>' : altitude.toFixed(8)
    els.accuracy.textContent = accuracy === null ? '<未知>' : accuracy.toFixed(8)
    els.altitudeAccuracy.textContent = altitudeAccuracy === null ? '<未知>' : altitudeAccuracy.toFixed(8)
  }

  function error(e) {
    els.err.textContent = e.message
  }

  navigator.geolocation.getCurrentPosition(success, error)

  navigator.geolocation.watchPosition(success, error, {
    enableHighAccuracy: true
  })
}

start()
