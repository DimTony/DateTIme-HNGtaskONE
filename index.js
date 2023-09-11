const express = require('express');
const { getCurrentWeekDay, getCurrentUTCWithValidation } = require('./utils/utils')
const app = express();
const port = 3000;

app.get('/info', (req, res) => {
  const { slack_name, track } = req.query;

  // Check if both parameters are provided
  if (!slack_name || !track) {
    return res.status(400).json({ error: 'Parameters slack_name and track are required.' });
  }

  const response = {
    slack_name,
    current_day: getCurrentWeekDay(),
    utc_time: getCurrentUTCWithValidation(),
    track,
    github_file_url: 'https://github.com/DimTony/HNGtaskONE/demo/index.js',
    github_repo_url: 'https://github.com/DimTony/HNGtaskONE',
    status_code: 200
  };

  res.json(response);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});