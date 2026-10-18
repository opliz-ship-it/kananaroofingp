import fs from 'fs';

const content = `%PDF-1.4
1 0 obj
<< /Type /Catalog /Pages 2 0 R >>
endobj
2 0 obj
<< /Type /Pages /Kids [3 0 R] /Count 1 >>
endobj
3 0 obj
<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>
endobj
4 0 obj
<< /Length 560 >>
stream
BT
/F1 20 Tf
50 780 Td
(KANANA ROOF - UPVC ROOFING SYSTEMS) Tj
/F1 11 Tf
0 -26 Td
(Technical Data Sheet & Specifications Catalog) Tj
0 -22 Td
(Manufacturer: Kanana Roof - 7th Industrial Zone, Sadat City, Menoufia, Egypt) Tj
0 -18 Td
(Official Tel / WhatsApp: +20 102 700 0979 | Email: kananaroof@gmail.com) Tj
0 -30 Td
(PRODUCT TECHNICAL HIGHLIGHTS:) Tj
0 -18 Td
(- Available Thicknesses: 1.5mm, 2.0mm, 2.5mm, 3.0mm) Tj
0 -18 Td
(- Sheet Dimensions: Overall Width 1130mm | Net Effective Coverage 1050mm) Tj
0 -18 Td
(- Custom Lengths: Tailored cutting up to 12.0 meters per sheet (No Joint Overlaps)) Tj
0 -18 Td
(- Thermal Conductivity: 0.14 W/m.K (Reduces indoor temp by 8-10 deg C vs corrugated steel)) Tj
0 -18 Td
(- Sound Insulation: Dampens heavy rainfall and hail noise up to 30 dB) Tj
0 -18 Td
(- Chemical Resistance: 100% resistant to acids, salts, ammonia, rust-proof) Tj
0 -18 Td
(- Fire Performance: Class B1 Flame Retardant (Self-extinguishing)) Tj
0 -18 Td
(- UV Shielding: Co-extruded ASA top layer preventing color fading) Tj
0 -18 Td
(- Factory Warranty: 10-Year Documented Manufacturer Guarantee) Tj
ET
endstream
endobj
5 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>
endobj
xref
0 6
0000000000 65535 f 
0000000009 00000 n 
0000000058 00000 n 
0000000115 00000 n 
0000000227 00000 n 
0000000839 00000 n 
trailer
<< /Size 6 /Root 1 0 R >>
startxref
916
%%EOF`;

fs.writeFileSync('public/kanana-roofing-catalog.pdf', content);
console.log('PDF written successfully, bytes:', fs.statSync('public/kanana-roofing-catalog.pdf').size);
