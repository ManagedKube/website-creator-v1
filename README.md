# Website Creator v1

An AI-driven platform for creating and deploying static websites to GitHub Pages. This repository combines the power of AI agents with modern web development practices to streamline website creation.

## Overview

Website Creator v1 is designed to be driven by AI agents that handle both planning and implementation of static websites. The platform leverages GitHub Pages for hosting and GitHub Actions for automated deployment.

## Features

- 🤖 **AI Planning Agent**: Gathers requirements and creates comprehensive website plans
- 🛠️ **AI Implementation Agent**: Builds and deploys websites based on specifications
- 🚀 **Automatic Deployment**: GitHub Actions workflow for seamless GitHub Pages deployment
- 📱 **Responsive Design**: Mobile-first approach with modern CSS
- ⚡ **Performance Optimized**: Fast loading times and optimized assets
- ♿ **Accessible**: WCAG 2.1 AA compliance
- 🎨 **Customizable**: Easy to modify and extend
- 📧 **Contact Form**: Built-in contact form with multiple service options

## Repository Structure

```
website-creator-v1/
├── .github/
│   ├── workflows/
│   │   └── pages.yml              # GitHub Actions deployment workflow
│   └── agents/
│       ├── planning-agent.md      # Planning Agent context and instructions
│       └── implementation-agent.md # Implementation Agent context and instructions
├── css/
│   └── style.css                  # Main stylesheet
├── js/
│   └── main.js                    # Main JavaScript file
├── _config.yml                    # Jekyll configuration
├── index.html                     # Homepage
├── .gitignore                     # Git ignore patterns
└── README.md                      # This file
```

## Getting Started

### Prerequisites

- A GitHub account
- Basic understanding of HTML, CSS, and JavaScript (for customization)
- GitHub Pages enabled in repository settings

### Setup GitHub Pages

1. Go to your repository settings
2. Navigate to "Pages" section
3. Under "Source", select "GitHub Actions"
4. The site will automatically deploy when you push to the main/master branch

### Local Development

To view the site locally:

```bash
# Clone the repository
git clone https://github.com/ManagedKube/website-creator-v1.git
cd website-creator-v1

# Open index.html in your browser
open index.html
# or
python3 -m http.server 8000
# Then visit http://localhost:8000
```

### Using with Jekyll (Optional)

If you want to use Jekyll's features locally:

```bash
# Install Jekyll (requires Ruby)
gem install bundler jekyll

# Serve the site
jekyll serve

# Visit http://localhost:4000
```

## AI Agent Workflow

### Planning Phase

The Planning Agent (`.github/agents/planning-agent.md`):
1. Asks questions about website goals and requirements
2. Gathers information about content, design, and functionality
3. Creates a comprehensive plan and specification
4. Hands off to the Implementation Agent

### Implementation Phase

The Implementation Agent (`.github/agents/implementation-agent.md`):
1. Receives the detailed plan from the Planning Agent
2. Creates HTML, CSS, and JavaScript files
3. Optimizes assets and ensures quality
4. Deploys to GitHub Pages
5. Provides documentation and handoff

## Customization

### Changing Colors

Edit `css/style.css` and modify the color values:

```css
/* Header gradient */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Accent color */
color: #667eea;
```

### Adding New Pages

1. Create a new HTML file (e.g., `about.html`)
2. Use the same structure as `index.html`
3. Update navigation links across all pages
4. Test and deploy

### Modifying Content

Edit `index.html` to change the content, headings, and structure.

### Setting Up the Contact Form

The website includes a contact form at the bottom of the homepage. To configure it to receive messages, see the detailed guide:

**[Contact Form Setup Guide](CONTACT_FORM_SETUP.md)**

Quick start (using Formspree - recommended):
1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form and get your form ID
3. In `index.html`, replace `YOUR_FORM_ID` in the form action URL
4. Deploy and test

See `CONTACT_FORM_SETUP.md` for all available options including FormSubmit, Web3Forms, Google Forms, and more.

## Deployment

### Automatic Deployment

Every push to the main/master branch triggers:
1. GitHub Actions workflow (`.github/workflows/pages.yml`)
2. Jekyll build process
3. Deployment to GitHub Pages
4. Site available at `https://<username>.github.io/<repository>/`

### Manual Deployment

You can also trigger deployment manually:
1. Go to "Actions" tab in GitHub
2. Select "Deploy to GitHub Pages" workflow
3. Click "Run workflow"

## Best Practices

### For Content Updates
- Keep commits focused and atomic
- Write clear commit messages
- Test changes locally before pushing
- Review the live site after deployment

### For Development
- Follow semantic HTML practices
- Maintain responsive design
- Optimize images before adding
- Test across different browsers and devices
- Keep dependencies minimal

### For AI Agents
- Provide clear, detailed requirements to Planning Agent
- Review and approve plans before implementation
- Test implemented features thoroughly
- Keep agent context files updated

## Contributing

When contributing to this project:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## Troubleshooting

### Site Not Deploying

1. Check GitHub Actions logs in the "Actions" tab
2. Verify GitHub Pages is enabled in settings
3. Ensure _config.yml has correct baseurl
4. Check for syntax errors in HTML/CSS/JS

### Styles Not Loading

1. Verify file paths are correct
2. Check browser console for errors
3. Ensure CSS file is properly linked in HTML
4. Clear browser cache

### 404 Errors

1. Check file paths match exactly (case-sensitive)
2. Verify baseurl in _config.yml
3. Ensure files are committed to the repository

## Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Jekyll Documentation](https://jekyllrb.com/docs/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [Web.dev](https://web.dev/)
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

## License

This project is open source and available under the MIT License.

## Support

For issues, questions, or contributions, please use the GitHub Issues page.
