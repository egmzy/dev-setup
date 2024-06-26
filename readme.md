# eg-dev-setup

A Node.js command-line interface (CLI) tool that automates the creation of predefined project structures for web development.

![image](https://github.com/egmzy/eg-dev-setup/assets/60209991/612a5b8d-2938-4308-816f-a1bb9e906b5f)

## Features

- **Quick Setup**: Initialize React and NestJS projects with predefined templates.
- **Modular Design**: Core functionalities like CLI handling, file operations, and logging are separated into different modules for better maintainability.
- **Custom Logger**: Utilizes a custom logger setup for clear and structured logging.

## Installation

To create a new project, simply run:

```bash
npx eg-dev-setup
```

or install `eg-dev-setup` globally using npm:

```bash
npm install -g eg-dev-setup
```

This allows you to use `eg-dev-setup` from anywhere on your system.

## Usage

To create a new project, simply run:

```bash
eg-dev-setup
```

You will be prompted to choose the type of project you want to set up:

- React Project
- NestJS Project

Select your desired project type, and `eg-dev-setup` will automatically create the project structure in your current directory.

## Project Structure

The CLI tool is structured as follows:

```
eg-dev-setup/
│
├── bin/                  # Entry point scripts
│   └── eg-dev-setup.js      # Main executable
│
├── lib/                  # Core functionality
│   ├── cli.js            # Setup CLI commands and options
│   ├── copier.js         # Handles copying of templates
│   └── logger.js         # Logger configuration
│
├── templates/            # Project templates directory
│   ├── react/            # React project template
│   └── nest/             # NestJS project template
│
├── package.json          # Node package file
└── README.md             # Project README
```

## Contributing

Contributions are welcome! If you have suggestions or improvements, please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
