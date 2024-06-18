const dummyApiResponse = {
  showLightAndDarkMode: false,
  showTicTacToeBoard: true,
  ShowRandomColorGenerator: true,
  showAccordion: false,
  showTreeView: true,
};

function featureFlagsDataServiceCall() {
  return new Promise((resolve, reject) => {
    if (dummyApiResponse) setTimeout(resolve(dummyApiResponse), 500);
    else reject("some error occurred try again");
  });
}

export default featureFlagsDataServiceCall;
