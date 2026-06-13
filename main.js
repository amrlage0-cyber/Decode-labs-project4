/**
 * STYLESTUDIO / CSS CUSTOMIZER
 * 
 * Core Architectural JavaScript Logic
 * 
 * 1. DOM Selections: Maps all control inputs and elements precisely by descriptive IDs.
 * 2. Real-time Calculation: Reads current slider values and builds formatted styles.
 * 3. Unified Style Engine: Seamlessly updates the DOM and highlights code outputs.
 * 4. Clipboard API: Direct system copies with interactive state reflections.
 */

// Helper to calculate RGBA formatting from Hexadecimal and Opacity parameters safely
function hexToRgba(hex, opacityPercent) {
  const cleanHex = hex.replace('#', '');
  const r = parseInt(cleanHex.substring(0, 2), 16) || 0;
  const g = parseInt(cleanHex.substring(2, 4), 16) || 0;
  const b = parseInt(cleanHex.substring(4, 6), 16) || 0;
  const alpha = (opacityPercent / 100).toFixed(2);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

// Ensure the code execution occurs safely after DOM is loaded completely
document.addEventListener('DOMContentLoaded', () => {

  // === 1. DOM SELECTORS ===
  const form = document.getElementById('style-form');
  const previewElement = document.getElementById('element-preview');
  const cssCodeBox = document.getElementById('css-code');
  const copyBtn = document.getElementById('copy-btn');
  const resetBtn = document.getElementById('reset-btn');

  // Input Controllers - Dimensions & Spacing
  const inputWidth = document.getElementById('width');
  const inputHeight = document.getElementById('height');
  const inputMarginX = document.getElementById('marginX');
  const inputMarginY = document.getElementById('marginY');
  const inputPaddingX = document.getElementById('paddingX');
  const inputPaddingY = document.getElementById('paddingY');

  // Input Controllers - Borders
  const inputBorderRadius = document.getElementById('borderRadius');
  const inputBorderWidth = document.getElementById('borderWidth');
  const inputBorderColor = document.getElementById('borderColor');

  // Input Controllers - Background layer config
  const inputBgMode = document.getElementById('bgMode');
  const inputBgColorA = document.getElementById('bgColorA');
  const inputBgColorB = document.getElementById('bgColorB');
  const inputBgAngle = document.getElementById('bgAngle');

  // Input Controllers - Text settings
  const inputFontSize = document.getElementById('fontSize');
  const inputTextColor = document.getElementById('textColor');
  const inputTextAlign = document.getElementById('textAlign');
  const inputTextVal = document.getElementById('textVal');

  // Input Controllers - Box Shadow Settings
  const inputShadowBlur = document.getElementById('blur');
  const inputShadowOffsetX = document.getElementById('shadowOffsetX');
  const inputShadowOffsetY = document.getElementById('shadowOffsetY');
  const inputShadowColor = document.getElementById('shadowColor');
  const inputShadowOpacity = document.getElementById('shadowOpacity');

  // Elements to print out numeric display changes in real-time
  const indicators = {
    width: document.getElementById('val-width'),
    height: document.getElementById('val-height'),
    marginX: document.getElementById('val-marginX'),
    marginY: document.getElementById('val-marginY'),
    paddingX: document.getElementById('val-paddingX'),
    paddingY: document.getElementById('val-paddingY'),
    borderRadius: document.getElementById('val-borderRadius'),
    borderWidth: document.getElementById('val-borderWidth'),
    bgAngle: document.getElementById('val-bgAngle'),
    fontSize: document.getElementById('val-fontSize'),
    blur: document.getElementById('val-blur'),
    shadowOffsetX: document.getElementById('val-shadowOffsetX'),
    shadowOffsetY: document.getElementById('val-shadowOffsetY'),
    shadowOpacity: document.getElementById('val-shadowOpacity'),
  };

  // === 2. THE CORE DESCRIPTOR ENGINE ===
  function updateElementStyles() {
    // Collect active values from input points
    const w = inputWidth.value;
    const h = inputHeight.value;
    const mx = inputMarginX.value;
    const my = inputMarginY.value;
    const px = inputPaddingX.value;
    const py = inputPaddingY.value;

    const borderRadius = inputBorderRadius.value;
    const borderWidth = inputBorderWidth.value;
    const borderColor = inputBorderColor.value;

    const bgMode = inputBgMode.value;
    const bgColorA = inputBgColorA.value;
    const bgColorB = inputBgColorB.value;
    const bgAngle = inputBgAngle.value;

    const fontSize = inputFontSize.value;
    const textColor = inputTextColor.value;
    const textAlign = inputTextAlign.value;
    const textVal = inputTextVal.value;

    const blur = inputShadowBlur.value;
    const shadowOffsetX = inputShadowOffsetX.value;
    const shadowOffsetY = inputShadowOffsetY.value;
    const shadowColor = inputShadowColor.value;
    const shadowOpacity = inputShadowOpacity.value;

    // Acknowledge text inputs visually instantly
    previewElement.textContent = textVal || ' ';

    // Update real-time numerical display indicators quickly
    if (indicators.width) indicators.width.textContent = `${w}px`;
    if (indicators.height) indicators.height.textContent = `${h}px`;
    if (indicators.marginX) indicators.marginX.textContent = `${mx}px`;
    if (indicators.marginY) indicators.marginY.textContent = `${my}px`;
    if (indicators.paddingX) indicators.paddingX.textContent = `${px}px`;
    if (indicators.paddingY) indicators.paddingY.textContent = `${py}px`;
    if (indicators.borderRadius) indicators.borderRadius.textContent = `${borderRadius}px`;
    if (indicators.borderWidth) indicators.borderWidth.textContent = `${borderWidth}px`;
    if (indicators.bgAngle) indicators.bgAngle.textContent = `${bgAngle}°`;
    if (indicators.fontSize) indicators.fontSize.textContent = `${fontSize}px`;
    if (indicators.blur) indicators.blur.textContent = `${blur}px`;
    if (indicators.shadowOffsetX) indicators.shadowOffsetX.textContent = `${shadowOffsetX}px`;
    if (indicators.shadowOffsetY) indicators.shadowOffsetY.textContent = `${shadowOffsetY}px`;
    if (indicators.shadowOpacity) indicators.shadowOpacity.textContent = `${shadowOpacity}%`;

    // Process Gradient structure settings visibility controls
    const gradBContainer = document.getElementById('grad-b-container');
    const gradAngleContainer = document.getElementById('grad-angle-container');
    
    let bgStyleValue = '';
    if (bgMode === 'gradient') {
      bgStyleValue = `linear-gradient(${bgAngle}deg, ${bgColorA}, ${bgColorB})`;
      if (gradBContainer) gradBContainer.style.opacity = '1';
      if (gradAngleContainer) gradAngleContainer.style.opacity = '1';
    } else {
      bgStyleValue = bgColorA;
      if (gradBContainer) gradBContainer.style.opacity = '0.35';
      if (gradAngleContainer) gradAngleContainer.style.opacity = '0.35';
    }

    // Process Drop Shadow configurations using safe hex color converters
    const shadowRgbaColor = hexToRgba(shadowColor, shadowOpacity);
    const shadowStyleValue = `${shadowOffsetX}px ${shadowOffsetY}px ${blur}px ${shadowRgbaColor}`;

    // Apply computed style changes cleanly to client preview layer
    previewElement.style.width = `${w}px`;
    previewElement.style.height = `${h}px`;
    previewElement.style.marginTop = `${my}px`;
    previewElement.style.marginBottom = `${my}px`;
    previewElement.style.marginLeft = `${mx}px`;
    previewElement.style.marginRight = `${mx}px`;
    previewElement.style.paddingTop = `${py}px`;
    previewElement.style.paddingBottom = `${py}px`;
    previewElement.style.paddingLeft = `${px}px`;
    previewElement.style.paddingRight = `${px}px`;
    previewElement.style.borderRadius = `${borderRadius}px`;
    
    // Set custom bounds for seamless borders
    previewElement.style.borderWidth = `${borderWidth}px`;
    previewElement.style.borderStyle = borderWidth > 0 ? 'solid' : 'none';
    previewElement.style.borderColor = borderColor;
    
    // Background layer rendering
    previewElement.style.background = bgStyleValue;
    
    // Text visual layout options
    previewElement.style.fontSize = `${fontSize}px`;
    previewElement.style.color = textColor;
    previewElement.style.textAlign = textAlign;
    
    // Text horizontal alignment flex helper wrapper alignment
    previewElement.style.display = 'flex';
    previewElement.style.alignItems = 'center';
    previewElement.style.justifyContent = textAlign === 'left' ? 'flex-start' : textAlign === 'right' ? 'flex-end' : 'center';

    // Shadows
    previewElement.style.boxShadow = shadowStyleValue;

    // Draw formatted string syntax code block into screen preview
    const cssContentText = `.custom-element {
  width: ${w}px;
  height: ${h}px;
  margin: ${my}px ${mx}px;
  padding: ${py}px ${px}px;
  background: ${bgStyleValue};
  border-radius: ${borderRadius}px;
  border: ${borderWidth}px ${borderWidth > 0 ? 'solid' : 'none'} ${borderColor};
  color: ${textColor};
  font-size: ${fontSize}px;
  text-align: ${textAlign};
  box-shadow: ${shadowStyleValue};
}`;

    // Render highlighted colored code markup text block
    const lines = cssContentText.split('\n');
    let highlightedHtml = '';
    
    lines.forEach((line) => {
      if (line.startsWith('.custom-element')) {
        highlightedHtml += `<span style="color:#f8fafc; font-weight:700;">${line}</span>\n`;
      } else if (line.trim() === '{' || line.trim() === '}') {
        highlightedHtml += `<span style="color:#64748b;">${line}</span>\n`;
      } else {
        const parts = line.split(':');
        if (parts.length >= 2) {
          const key = parts[0];
          const val = parts.slice(1).join(':');
          highlightedHtml += `  <span style="color:#34d399;">${key}</span><span style="color:#64748b;">:</span><span style="color:#38bdf8;">${val}</span>\n`;
        } else {
          highlightedHtml += `${line}\n`;
        }
      }
    });

    cssCodeBox.innerHTML = highlightedHtml;
  }

  // === 3. INTERACTION LISTENERS ===
  // Handle updates dynamically as user moves range sliders instantly via single input event
  form.addEventListener('input', updateElementStyles);

  // Clipboard Copier API Implementation
  copyBtn.addEventListener('click', () => {
    // Fetch target code as standard text format
    const codeString = cssCodeBox.innerText;
    navigator.clipboard.writeText(codeString)
      .then(() => {
        const originalText = copyBtn.innerHTML;
        copyBtn.innerHTML = `
          <svg style="width:14px; height:14px; display:inline; margin-right:4px;" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          Copied!
        `;
        copyBtn.style.backgroundColor = '#10b98120';
        copyBtn.style.borderColor = '#10b98180';
        copyBtn.style.color = '#34d399';

        setTimeout(() => {
          copyBtn.innerHTML = originalText;
          copyBtn.style.backgroundColor = '';
          copyBtn.style.borderColor = '';
          copyBtn.style.color = '';
        }, 1500);
      })
      .catch((err) => {
        console.error('Copy event aborted: ', err);
      });
  });

  // Structural Form resets
  resetBtn.addEventListener('click', () => {
    form.reset();
    updateElementStyles();
  });

  // Complete initial rendering cycle programmatically
  updateElementStyles();
});
