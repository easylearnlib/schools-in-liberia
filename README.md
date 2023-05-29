## Schools in Liberia

Schools in Liberia is an open source project which aims to give accurate and up-to-date information about educational institutions in Liberia and details about location,contacts, facilities, ratings and more.

For more information please contact: solodolley@gmail.com/+231777298772

The generated site https://schools.smartchance.co is based on github pages.

## Data

This project uses [Schools list](https://drive.google.com/file/d/1kMRPUeuG7HGjLN-9BCMsTJl8B5J3kJYr/view?usp=sharing) as data source.

## Project structure

This project was bootstrapped with
[NextJs](https://nextjs.org/).

### Local development

Install dependencies:

```shell
npm install
```

To run the application locally, you have to download the data from [Schools list](https://drive.google.com/file/d/1kMRPUeuG7HGjLN-9BCMsTJl8B5J3kJYr/view?usp=sharing) and save it in a folder `data`

```shell
npm run dev
```

To build and export the application, use

```shell
npm build
```

### Docker build

Make sure you have docker installed.

Build the docker image

```shell script
docker build -t my-app .
```

Run the docker image

```shell script
docker run -dit --name my-running-app -p 8080:80 my-app
```

The application is served at http://localhost:8080

### How to contribute?

If you have any idea on how to improve this project or you would like to contribute to the technical development, please reach out to us.

Please feel free to fork the project, raise new issues, or make pull requests. All ideas and suggestions are welcome

###License

[MIT](./LICENSE)
