import { paths } from "./api";
import { Fetcher } from "openapi-typescript-fetch";

const fetcher = Fetcher.for<paths>();
fetcher.configure({
    baseUrl: "https://api.laboulangerie.net",
});

export default fetcher;
