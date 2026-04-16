import React from 'react';
import { CustomShadcnBlockProps } from '../../types';
import { ComponentPreview } from '../ComponentPreview';
import { enhanceHtmlForPreview } from '../../utils/htmlPreviewHelper';

/**
 * Custom Shadcn Block Component
 * Renders shadcn studio blocks in an iframe for preview
 * This component can be dragged and dropped on the canvas
 */
const CustomShadcnBlock: React.FC<CustomShadcnBlockProps> = ({ 
  blockName, 
  blockCode, 
  htmlContent,
  theme 
}) => {
  const [previewHtml, setPreviewHtml] = React.useState<string>('');

  React.useEffect(() => {
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('🎨 CUSTOMSHADCNBLOCK RENDERING');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('📥 INPUT (Props received):');
    console.log('  Block Name:', blockName);
    console.log('  Block Code Length:', blockCode?.length || 0, 'chars');
    console.log('  Has HTML Content:', !!htmlContent);
    console.log('  Block Code Preview (first 300 chars):');
    console.log(blockCode?.substring(0, 300) || 'N/A');
    
    if (htmlContent) {
      console.log('✅ Using pre-rendered HTML content');
      console.log('  HTML Content Length:', htmlContent.length);
      const enhanced = enhanceHtmlForPreview(htmlContent);
      console.log('  Enhanced HTML Length:', enhanced.length);
      setPreviewHtml(enhanced);
    } else if (blockCode) {
      console.log('🔄 EXTRACTING HTML FROM BLOCK CODE...');
      
      // Check if code needs transformation (doesn't have export default function)
      const needsTransformation = !blockCode.includes('export default function');
      
      if (needsTransformation) {
        console.log('⚠️ Code appears untransformed, auto-transforming...');
        // Use dynamic import for async transformation
        import('../../utils/shadcnTransformer').then(({ transformShadcnBlockToSingleComponent }) => {
          const transformedCode = transformShadcnBlockToSingleComponent(blockCode, blockName);
          console.log('✅ Auto-transformation complete');
          console.log('  Original length:', blockCode.length);
          console.log('  Transformed length:', transformedCode.length);
          console.log('  📄 Transformed code (full):');
          console.log(transformedCode);
          console.log('  📄 Transformed code (first 500 chars):');
          console.log(transformedCode.substring(0, 500));
          console.log('  📄 Transformed code (last 200 chars):');
          console.log(transformedCode.substring(Math.max(0, transformedCode.length - 200)));
          
          // Extract HTML from transformed code
          const html = extractHtmlFromCode(transformedCode);
          console.log('📤 OUTPUT (Extracted HTML):');
          console.log(`  [${blockName}] Extracted HTML length:`, html.length);
          console.log(`  [${blockName}] Extracted HTML preview (first 300 chars):`);
          console.log(html.substring(0, 300));
          
          const enhanced = enhanceHtmlForPreview(html);
          console.log(`  [${blockName}] Enhanced HTML length:`, enhanced.length);
          setPreviewHtml(enhanced);
          console.log('✅ HTML set for preview (transformed)');
        }).catch((error) => {
          console.warn('⚠️ Failed to auto-transform, using original code:', error);
          // Fallback to original code
          const html = extractHtmlFromCode(blockCode);
          const enhanced = enhanceHtmlForPreview(html);
          setPreviewHtml(enhanced);
        });
      } else {
        console.log('✅ Code already transformed (has export default function)');
        // Extract HTML from TSX/JSX code
        const html = extractHtmlFromCode(blockCode);
        console.log('📤 OUTPUT (Extracted HTML):');
        console.log(`  [${blockName}] Extracted HTML length:`, html.length);
        console.log(`  [${blockName}] Extracted HTML preview (first 300 chars):`);
        console.log(html.substring(0, 300));
        console.log(`  [${blockName}] Extracted HTML preview (last 100 chars):`);
        console.log(html.substring(Math.max(0, html.length - 100)));
        
        console.log('✨ ENHANCING HTML...');
        const enhanced = enhanceHtmlForPreview(html);
        console.log(`  [${blockName}] Enhanced HTML length:`, enhanced.length);
        console.log(`  [${blockName}] Enhanced HTML preview (first 200 chars):`);
        console.log(enhanced.substring(0, 200));
        setPreviewHtml(enhanced);
        console.log('✅ HTML set for preview');
      }
    } else {
      console.warn(`⚠️ [${blockName}] No blockCode or htmlContent provided`);
    }
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  }, [blockCode, htmlContent, blockName]);

  const handleLog = React.useCallback((message: string, level: 'log' | 'warn' | 'error') => {
    console[level](`[${blockName}]`, message);
  }, [blockName]);

  if (!previewHtml) {
    return (
      <div className="p-8 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800">
        <div className="text-center">
          <p className="text-gray-500 mb-2">Loading {blockName}...</p>
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600 mx-auto"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full min-h-[200px]">
      <ComponentPreview html={previewHtml} onLog={handleLog} />
    </div>
  );
};

/**
 * Process JSX string to convert it to HTML
 */
function processJsxString(jsx: string, code: string): string {
  if (!jsx) return '';
  
  // Remove JSX comments
  jsx = jsx.replace(/\/\*[\s\S]*?\*\//g, '');
  jsx = jsx.replace(/\/\/.*$/gm, '');
  
  // Convert className to class
  jsx = jsx.replace(/className\s*=/g, 'class=');
  
  // Handle self-closing tags
  jsx = jsx.replace(/<(\w+)([^>]*)\s*\/>/g, '<$1$2></$1>');
  
  // Convert React component tags to divs with classes (for basic rendering)
  // Badge -> span with badge styling
  jsx = jsx.replace(/<Badge([^>]*)>/gi, '<span class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"$1>');
  jsx = jsx.replace(/<\/Badge>/gi, '</span>');
  
  // Button -> button element
  jsx = jsx.replace(/<Button([^>]*)>/gi, '<button class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"$1>');
  jsx = jsx.replace(/<\/Button>/gi, '</button>');
  
  // Input -> input element
  jsx = jsx.replace(/<Input([^>]*)>/gi, '<input type="text" class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"$1>');
  jsx = jsx.replace(/<\/Input>/gi, '');
  
  // Label -> label element
  jsx = jsx.replace(/<Label([^>]*)>/gi, '<label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"$1>');
  jsx = jsx.replace(/<\/Label>/gi, '</label>');
  
  // Popover -> div (simplified)
  jsx = jsx.replace(/<Popover([^>]*)>/gi, '<div class="relative"$1>');
  jsx = jsx.replace(/<\/Popover>/gi, '</div>');
  jsx = jsx.replace(/<PopoverTrigger([^>]*)>/gi, '<div class="inline-block"$1>');
  jsx = jsx.replace(/<\/PopoverTrigger>/gi, '</div>');
  jsx = jsx.replace(/<PopoverContent([^>]*)>/gi, '<div class="absolute z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none"$1>');
  jsx = jsx.replace(/<\/PopoverContent>/gi, '</div>');
  
  // Calendar -> div with calendar styling
  jsx = jsx.replace(/<Calendar([^>]*)>/gi, '<div class="rounded-md border p-3"$1>');
  jsx = jsx.replace(/<\/Calendar>/gi, '</div>');
  
  // CalendarIcon and other lucide-react icons -> SVG placeholder
  jsx = jsx.replace(/<CalendarIcon([^>]*)\s*\/?>/gi, '<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>');
  jsx = jsx.replace(/<(\w+Icon)([^>]*)\s*\/?>/gi, '<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>');
  
  // Handle asChild prop (common in shadcn/ui)
  jsx = jsx.replace(/\s+asChild\s*/gi, ' ');
  
  // Handle PopoverTrigger with asChild - convert to button
  jsx = jsx.replace(/<PopoverTrigger[^>]*asChild[^>]*>/gi, '<button class="inline-block">');
  
  // Try to extract default values from useState and other initializations before converting expressions
  const defaultValues: Record<string, string> = {};
  
  // Extract useState initial values: const [value, setValue] = useState("default")
  const useStatePattern = /const\s+\[(\w+)[^\]]*\]\s*=\s*useState\s*\(\s*(["'`])([^"'`]+)\2\s*\)/g;
  let useStateMatch;
  while ((useStateMatch = useStatePattern.exec(code)) !== null) {
    const varName = useStateMatch[1];
    const defaultValue = useStateMatch[3];
    if (varName && defaultValue) {
      defaultValues[varName] = defaultValue;
    }
  }
  
  // Extract const declarations with string values: const name = "value"
  const constMatches = code.matchAll(/const\s+(\w+)\s*=\s*(["'`])([^"'`]+)\2/g);
  for (const match of constMatches) {
    const varName = match[1];
    const value = match[3];
    if (varName && value) {
      defaultValues[varName] = value;
    }
  }
  
  // Convert JSX expressions {variable} to placeholders or extract strings
  jsx = jsx.replace(/\{([^}]+)\}/g, (match, content) => {
    const trimmed = content.trim();
    
    // Handle cn() function calls - extract string arguments
    const cnMatch = trimmed.match(/cn\s*\(\s*['"]([^'"]+)['"]\s*(?:,\s*\w+\s*)?\)/);
    if (cnMatch) {
      return `"${cnMatch[1]}"`;
    }
    
    // If it's a string literal, extract it and wrap in quotes
    if ((trimmed.startsWith('"') && trimmed.endsWith('"')) || 
        (trimmed.startsWith("'") && trimmed.endsWith("'"))) {
      return `"${trimmed.slice(1, -1)}"`;
    }
    // If it's a template literal, try to extract and wrap in quotes
    if (trimmed.startsWith('`') && trimmed.endsWith('`')) {
      return `"${trimmed.slice(1, -1)}"`;
    }
    // Handle {' '} (space in JSX)
    if (trimmed === "' '" || trimmed === '" "') {
      return ' ';
    }
    // If it's a simple variable, try to find its default value
    if (/^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(trimmed)) {
      // Check if we have a default value for this variable
      if (defaultValues[trimmed]) {
        return defaultValues[trimmed];
      }
      // Check for common patterns like value, text, name, title, etc.
      const commonDefaults: Record<string, string> = {
        'value': '',
        'text': 'Sample Text',
        'name': 'Name',
        'title': 'Title',
        'label': 'Label',
        'placeholder': 'Enter text...',
        'date': new Date().toLocaleDateString(),
      };
      if (commonDefaults[trimmed.toLowerCase()]) {
        return commonDefaults[trimmed.toLowerCase()];
      }
      // For other variables, use empty string instead of [VALUE] to avoid visual clutter
      return '';
    }
    // Handle property access like item.name, user.email, etc.
    if (trimmed.includes('.')) {
      const parts = trimmed.split('.');
      const lastPart = parts[parts.length - 1];
      // Use meaningful defaults based on property name
      const propertyDefaults: Record<string, string> = {
        'name': 'Name',
        'email': 'email@example.com',
        'title': 'Title',
        'text': 'Text',
        'value': '',
        'label': 'Label',
      };
      if (propertyDefaults[lastPart.toLowerCase()]) {
        return propertyDefaults[lastPart.toLowerCase()];
      }
      return '';
    }
    // Otherwise, remove complex expressions
    return '';
  });
  
  // Remove import statements and other non-JSX code
  jsx = jsx.replace(/import\s+.*?from\s+['"][^'"]+['"];?\s*/g, '');
  jsx = jsx.replace(/export\s+(default\s+)?(function|const|class)\s+\w+.*?\{/g, '');
  
  // Fix malformed attributes (e.g., class={...} that wasn't converted properly)
  // Remove any remaining JSX artifacts
  jsx = jsx.replace(/class=\{[^}]*\}/g, 'class=""');
  jsx = jsx.replace(/className=\{[^}]*\}/g, 'class=""');
  
  // Ensure attribute values are properly quoted
  jsx = jsx.replace(/(\w+)=([^"\s>][^\s>]*)/g, (match, attrName, attrValue) => {
    // Skip if already quoted
    if (attrValue.startsWith('"') || attrValue.startsWith("'")) {
      return match;
    }
    // Quote the value
    return `${attrName}="${attrValue}"`;
  });
  
  // Clean up whitespace but preserve structure
  jsx = jsx.replace(/\s+/g, ' ');
  jsx = jsx.replace(/>\s+</g, '><');
  jsx = jsx.trim();
  
  return jsx;
}

/**
 * Extract HTML from TSX/JSX code
 * Uses a more sophisticated approach to convert React/JSX to HTML
 */
function extractHtmlFromCode(code: string): string {
  console.log('🔍 extractHtmlFromCode called');
  console.log('  Input code length:', code?.length || 0);
  
  if (!code || code.trim() === '') {
    console.warn('⚠️ No code provided to extractHtmlFromCode');
    return '<div class="p-4 text-center text-gray-500">No code provided</div>';
  }

  // First, check for export default function (from transformer)
  // Match: export default function ComponentName() { ... }
  console.log('🔎 Checking for export default function pattern...');
  const defaultExportPattern = /export\s+default\s+function\s+\w+\s*\([^)]*\)\s*\{([\s\S]*)\}/;
  const defaultExportMatch = code.match(defaultExportPattern);
  if (defaultExportMatch && defaultExportMatch[1]) {
    console.log('✅ Found export default function');
    const componentBody = defaultExportMatch[1];
    console.log('  Component body length:', componentBody.length);
    console.log('  Component body preview (first 500 chars):');
    console.log(componentBody.substring(0, 500));
    
    // Find return statement with proper parenthesis matching
    const returnMatch = componentBody.match(/return\s*\(/);
    if (returnMatch) {
      const startIndex = returnMatch.index! + returnMatch[0].length;
      let depth = 1;
      let i = startIndex;
      
      // Find matching closing parenthesis
      while (i < componentBody.length && depth > 0) {
        const char = componentBody[i];
        if (char === '(') depth++;
        else if (char === ')') depth--;
        i++;
      }
      
      if (depth === 0) {
        // Found matching closing parenthesis
        let mainJsx = componentBody.substring(startIndex, i - 1).trim();
        console.log('  Found return statement with balanced parentheses, JSX length:', mainJsx.length);
        console.log('  JSX preview (first 500 chars):');
        console.log(mainJsx.substring(0, 500));
        
        // Check if main JSX contains component tags (like <DestinationDate />)
        const componentTagPattern = /<(\w+)\s*\/?>/g;
        const componentTags = Array.from(mainJsx.matchAll(componentTagPattern));
        const componentNames = componentTags.map(m => m[1]).filter(name => name[0] === name[0].toUpperCase());
        
        if (componentNames.length > 0) {
          console.log('  🔍 Found component tags in main JSX:', componentNames);
          console.log('  📦 Extracting JSX from sub-components...');
          
          // Extract JSX from each sub-component
          const allSubComponentJsx: string[] = [];
          for (const componentName of componentNames) {
            // Find component definition start: const ComponentName = () => {
            const componentDefStart = new RegExp(`const\\s+${componentName}\\s*=\\s*\\([^)]*\\)\\s*=>\\s*\\{`, 'i');
            const componentMatch = code.match(componentDefStart);
            
            if (componentMatch) {
              const bodyStartIndex = componentMatch.index! + componentMatch[0].length;
              let braceDepth = 1;
              let bodyI = bodyStartIndex;
              
              // Find matching closing brace (handle nested braces)
              while (bodyI < code.length && braceDepth > 0) {
                const char = code[bodyI];
                const prevChar = bodyI > 0 ? code[bodyI - 1] : '';
                
                // Handle string literals to avoid counting braces inside strings
                if ((char === '"' || char === "'" || char === '`') && prevChar !== '\\') {
                  const stringChar = char;
                  bodyI++;
                  while (bodyI < code.length) {
                    if (code[bodyI] === stringChar && code[bodyI - 1] !== '\\') {
                      break;
                    }
                    bodyI++;
                  }
                } else {
                  if (char === '{') braceDepth++;
                  else if (char === '}') braceDepth--;
                }
                bodyI++;
              }
              
              if (braceDepth === 0) {
                const subComponentBody = code.substring(bodyStartIndex, bodyI - 1);
                console.log(`    📄 Found ${componentName} body, length:`, subComponentBody.length);
                
                // Find return statement in sub-component
                const subReturnMatch = subComponentBody.match(/return\s*\(/);
                if (subReturnMatch) {
                  const subStartIndex = subReturnMatch.index! + subReturnMatch[0].length;
                  let subDepth = 1;
                  let subI = subStartIndex;
                  
                  while (subI < subComponentBody.length && subDepth > 0) {
                    const char = subComponentBody[subI];
                    if (char === '(') subDepth++;
                    else if (char === ')') subDepth--;
                    subI++;
                  }
                  
                  if (subDepth === 0) {
                    const subJsx = subComponentBody.substring(subStartIndex, subI - 1).trim();
                    console.log(`    ✅ Extracted JSX from ${componentName}, length:`, subJsx.length);
                    allSubComponentJsx.push(subJsx);
                  }
                }
              }
            }
          }
          
          if (allSubComponentJsx.length > 0) {
            // Combine all sub-component JSX
            const combinedJsx = allSubComponentJsx.join('\n\n');
            console.log('  ✅ Combined all sub-components, total length:', combinedJsx.length);
            const processedJsx = processJsxString(combinedJsx, code);
            if (processedJsx && processedJsx.length > 20) {
              console.log('  ✅ Returning processed combined JSX, length:', processedJsx.length);
              return processedJsx;
            }
          }
        }
        
        // If no sub-components found or extraction failed, use main JSX
        if (mainJsx.length > 20) {
          // Process the JSX
          console.log('  Processing main JSX...');
          mainJsx = processJsxString(mainJsx, code);
          if (mainJsx && mainJsx.length > 20) {
            console.log('  ✅ Returning processed JSX, length:', mainJsx.length);
            return mainJsx;
          }
        }
      }
    }
    
    // Fallback to simple return pattern matching
    const returnPatterns = [
      /return\s*\(\s*([\s\S]*?)\s*\)\s*;?/,
      /return\s+([\s\S]*?)\s*;?/,
    ];
    
    for (const returnPattern of returnPatterns) {
      const returnMatch = componentBody.match(returnPattern);
      if (returnMatch && returnMatch[1]) {
        let jsx = returnMatch[1].trim();
        console.log('  Found return statement (fallback), JSX length:', jsx.length);
        if (jsx.length > 20) {
          // Process the JSX
          console.log('  Processing JSX...');
          jsx = processJsxString(jsx, code);
          if (jsx && jsx.length > 20) {
            console.log('  ✅ Returning processed JSX, length:', jsx.length);
            return jsx;
          }
        }
      }
    }
    console.log('⚠️ No valid return statement found in export default function');
  } else {
    console.log('ℹ️ No export default function found, checking for other patterns...');
  }

  // Check if there are multiple component exports
  const exportMatches = Array.from(code.matchAll(/export\s+(?:const|function)\s+(\w+)\s*=/g));
  const exportedComponents = exportMatches.map(m => m[1]);
  
  // Extract JSX from all exported components and combine them
  const allJsx: string[] = [];
  
  if (exportedComponents.length > 0) {
    // Extract JSX from each exported component
    for (const componentName of exportedComponents) {
      // Find the component definition - handle arrow functions and regular functions
      const componentPatterns = [
        new RegExp(`export\\s+(?:const|function)\\s+${componentName}\\s*=\\s*\\([^)]*\\)\\s*=>\\s*\\{([\\s\\S]*?)\\n\\}`, 'i'),
        // Regular function: export function ComponentName() { ... return (...) }
        new RegExp(`export\\s+function\\s+${componentName}\\s*\\([^)]*\\)\\s*\\{([\\s\\S]*?)\\n\\}`, 'i'),
        new RegExp(`(?:export\\s+)?const\\s+${componentName}\\s*=\\s*\\([^)]*\\)\\s*=>\\s*\\{([\\s\\S]*?)\\n\\}`, 'i'),
      ];
      
      for (const pattern of componentPatterns) {
        const match = code.match(pattern);
        if (match && match[1]) {
          const componentBody = match[1];
          
          // Find return statement in this component
          const returnPatterns = [
            /return\s*\(\s*([\s\S]*?)\s*\)\s*;?/,
            /return\s+([\s\S]*?)\s*;?/,
          ];
          
          for (const returnPattern of returnPatterns) {
            const returnMatch = componentBody.match(returnPattern);
            if (returnMatch && returnMatch[1]) {
              allJsx.push(returnMatch[1].trim());
              break;
            }
          }
          break;
        }
      }
    }
  }
  
  // If we found JSX from components, combine them
  let jsx = '';
  if (allJsx.length > 0) {
    // Combine all components with spacing
    jsx = allJsx.join('\n\n');
  } else {
    // Fallback: try to find any return statement in the code
    const returnPatterns = [
      /return\s*\(\s*([\s\S]*?)\s*\)\s*;?/,
      /return\s+([\s\S]*?)\s*;?/,
    ];
    
    for (const pattern of returnPatterns) {
      const match = code.match(pattern);
      if (match && match[1]) {
        jsx = match[1].trim();
        break;
      }
    }
    
    // If no return statement found, try to find JSX directly
    if (!jsx) {
      const jsxMatch = code.match(/<[a-zA-Z][\s\S]*<\/[a-zA-Z][^>]*>/);
      if (jsxMatch) {
        jsx = jsxMatch[0];
      }
    }
  }
  
  if (jsx) {
    jsx = processJsxString(jsx, code);
    if (jsx.length > 20) {
      return jsx;
    }
  }
  
  // Fallback: try to find any HTML-like content
  const htmlMatch = code.match(/<[^>]+>[\s\S]*<\/[^>]+>/);
  if (htmlMatch && htmlMatch[0].length > 20) {
    return htmlMatch[0].replace(/className\s*=/g, 'class=');
  }
  
  // Last resort: return a styled placeholder with code preview
  return `
    <div class="p-8 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 rounded-lg border border-purple-200 dark:border-gray-700">
      <div class="mb-4">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">${extractComponentName(code)}</h2>
        <p class="text-gray-600 dark:text-gray-400">Shadcn Studio Block</p>
        <p class="text-sm text-red-500 mt-2">⚠️ Could not extract HTML from code</p>
      </div>
      <div class="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-gray-200 dark:border-gray-700">
        <p class="text-sm text-gray-500 dark:text-gray-400 mb-2">Component Code (first 500 chars):</p>
        <pre class="text-xs overflow-auto max-h-64 bg-gray-50 dark:bg-gray-900 p-3 rounded">${escapeHtml(code.substring(0, 500))}${code.length > 500 ? '...' : ''}</pre>
      </div>
    </div>
  `;
}

function extractComponentName(code: string): string {
  const nameMatch = code.match(/(?:export\s+(?:default\s+)?(?:function|const)\s+)?(\w+)/);
  return nameMatch ? nameMatch[1] : 'Custom Block';
}

function escapeHtml(text: string): string {
  if (typeof document === 'undefined') {
    // Server-side rendering fallback
    return text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

export default CustomShadcnBlock;

