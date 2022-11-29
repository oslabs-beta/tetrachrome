import * as zoid from 'zoid/dist/zoid.frameworks';

const TestWindow = zoid.create({
    tag: 'test-window',
    url: 'http://localhost:8080/',
    dimensions: {
        width: "100%",
        height: "500px",
      },
})

export default TestWindow;