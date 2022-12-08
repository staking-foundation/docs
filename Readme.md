Build Diva Specification PDF
==================

1. Install `pandoc`:

    ```
    brew install pandoc
    pip install pandoc-latex-environment
    ```

2. Install `basictex`:

    ```
    brew install --cask basictex
    ```

3. Close terminal and open it again, or run:

    ```
    zsh --login
    ```

4. Install tex packages:

    ```
    sudo tlmgr update --self
    sudo tlmgr install newverbs
    sudo tlmgr install tcolorbox
    sudo tlmgr install environ
    sudo tlmgr install breakurl
    sudo tlmgr install listingsutf8
    sudo tlmgr install xpatch
    sudo tlmgr install realboxes
    sudo tlmgr install collectbox
    sudo tlmgr install fvextra
    ```

5. Run `./generate-whitepaper.sh`.

# Docker

```
docker build -t docusaurus:latest .

docker tag docusaurus:latest ghcr.io/divalabs/diva-specs:latest

docker run -d -p 80:80 docusaurus:latest
```

# Docusaurus Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
npm install
```

or

```
yarn
```

### Local Development

```
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
USE_SSH=true yarn deploy
```

Not using SSH:

```
GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
