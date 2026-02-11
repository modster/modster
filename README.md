
<div style="text-align: center;">

# Modster
## A GitHiub Pages template for Observable notebooks and modster's GitHub profile. Two birds, one stone.

</div>

This is a template for hosting Observable notebooks on GitHub Pages. It uses the [observablehq](https://www.npmjs.com/package/observablehq) package to build and deploy notebooks as static HTML files. The template includes a simple dashboard layout with a sidebar for navigation and a footer for branding.

## Getting Started
To get started follow these steps:

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
    npm run dev
    ```
3. Open your browser and navigate to `http://localhost:8080` to see the dashboard.
4. To deploy your notebooks to GitHub Pages, run:
   ```bash
    npm run deploy
    ```

## Customization
You can customize the dashboard by editing the `observablehq.config.js` file. This file defines
the structure of the sidebar, the theme, and other settings. You can add new notebooks to the `src` directory and link them in the sidebar configuration.

## Examples
Check out [Examples](https://modster.github.io/modster/examples) to see some sample notebooks built by @modster.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


