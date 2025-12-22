// Simple PDF generator - generates PDF from the homepage
// Usage: node generate-pdf-now.js
// Make sure your dev server is running on http://localhost:3000

const puppeteer = require("puppeteer");
const fs = require("fs");
const path = require("path");

async function generatePDF() {
  console.log("🚀 Generating PDF from homepage...");

  try {
    const browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });

    const page = await browser.newPage();
    await page.setViewport({ width: 1200, height: 800 });

    // Navigate to the PDF version (without download button)
    await page.goto("http://localhost:3000/pdf", {
      waitUntil: "networkidle0",
      timeout: 30000,
    });

    // Generate PDF
    const pdf = await page.pdf({
      format: "A4",
      printBackground: true,
      margin: { top: "20px", right: "20px", bottom: "20px", left: "20px" },
    });

    await browser.close();

    // Save to public directory
    const pdfPath = path.join(__dirname, "public", "tom-randus-cv.pdf");
    fs.writeFileSync(pdfPath, pdf);

    console.log("✅ PDF generated successfully!");
    console.log("📄 Saved to: public/tom-randus-cv.pdf");
    console.log("🔗 Download at: http://localhost:3000/tom-randus-cv.pdf");
  } catch (error) {
    console.error("❌ Error:", error.message);
    console.log("\n💡 Make sure your dev server is running: pnpm dev");
  }
}

generatePDF();
