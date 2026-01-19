# GOOEY

A collection of Vue components based on Tailwind CSS, Shadcn-vue, and others.

## Documentation

For installation instructions, component documentation, and examples, run the docs locally:

```bash
git clone https://github.com/codinglabsau/gooey.git
cd gooey
npm install
npm run dev
```

Then open http://localhost:5173 in your browser.

## Testing

Tests are implemented with Cypress, and can be run on CLI using `npm run test`. We are implementing end-to-end tests as most components are tested upstream.

For shadcn components, we do simple smoke tests to ensure they are not generating errors with basic usage.

For custom components, we are testing the functionality in depth.

## Security

If you discover any security related issues, create an issue on GitHub.

## Credits

- [Steve Thomas](https://github.com/stevethomas)
- [All Contributors](../../contributors)

## License

MIT

## About Coding Labs

Coding Labs is a web app development agency based on the Gold Coast, Australia. See our open source projects [on our website](https://codinglabs.com.au/open-source).
