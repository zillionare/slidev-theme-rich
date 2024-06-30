import MdItAdmon from 'markdown-it-admon';
import { full as emoji } from 'markdown-it-emoji';
// import UnoCSS from 'unocss/vite';
import { defineConfig } from 'vite';


export default defineConfig({
    slidev: {
        vue: {
            /* vue options */
            template:{
                compilerOptions: {
                    whitespace: 'preserve'
                }
            }
        },
        markdown: {
            /* markdown-it options */
            markdownItSetup(md) {
                /* custom markdown-it plugins */
                // md.use(require('markdown-it-admon'));
                // md.use(require('markdown-it-container'), 'takeaway');
                md.use(emoji);
                md.use(MdItAdmon);
            },
        },
  }
// ,plugins:[
//     UnoCSS()
//   ]
})
