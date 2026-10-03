function deepFreeze(obj) {
  Object.values(obj).forEach((value) => {
    if (value !== null && typeof value === "object") {
      deepFreeze(value);
    }
  });

  return Object.freeze(obj);
}
const config = deepFreeze({
  api: { baseUrl: "https://x.com", retries: 3 },
  debug: false,
});

config.api.baseUrl = "https://changed.com";
config.debug = true;

console.log(config.api.baseUrl, config.debug);
console.log(Object.isFrozen(config.api));
