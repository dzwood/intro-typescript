import { RESTDataSource } from "@apollo/datasource-rest";

export class SpotifyAPI extends RESTDataSource {
  baseURL = "https://spotify-demo-api-fe224840a08c.herokuapp.com/v1/";

  async getFeaturedPlaylists() {
    const { playlists = [] } = await this.get("browse/featured-playlists");
    const { items = [] } = playlists;
    return items;
  }
}
