const Constants: any = {};
Constants.BASE_URL = "https://vision.googleapis.com/v1/images:annotate";
Constants.KEY_CONNECTOR = "?key=";
Constants.REQUEST_PAYLOAD = {
  requests: [
    {
      image: {
        content: ""
      },
      features: [
        {
          model: "builtin/latest",
          type: "DOCUMENT_TEXT_DETECTION"
        }
      ]
    }
  ]
};
Constants.EMPTY_RESPONSE = {
  raw_text: []
};
Constants.OCR_TIMEOUT = 30000;

export default Constants;
