const puppeteer = require('puppeteer');

exports.startAutomation = async (req, res) => {
  const { username, password } = req.body;
  try {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto('https://crewportal.example.com');
    
    // Perform login
    await page.type('#username', username);
    await page.type('#password', password);
    await page.click('#loginButton');
    
    await page.waitForNavigation();
    
    // Capture a screenshot for confirmation
    await page.screenshot({ path: 'automation-success.png' });

    await browser.close();
    res.status(200).json({ message: 'Automation completed successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
