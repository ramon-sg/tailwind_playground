/**
 * add hot reload
 * @see {@link https://github.com/parcel-bundler/parcel/issues/7241#issuecomment-986410024}
 */
if (module.hot) {
  module.hot.accept(() => {
    location.reload();
  });
}

console.log("Hi :)");
