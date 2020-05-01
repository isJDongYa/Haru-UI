const HaIcons = {};

function importAll (r) {
  r.keys().forEach(key => {
    HaIcons[key.replace('./', '').replace('.svg', '') ] = r(key)
  });
}


importAll(require.context('./TmallElves/', false, /.svg$/));

export default HaIcons