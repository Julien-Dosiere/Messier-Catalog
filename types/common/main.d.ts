

interface State {
    trackResults: TrackResults,
    artistResults: ArtistResults,
    searchValue: string,
    isLoading: boolean,
    token: string

}



type GenericObject = { [key: string]: GenericObject };
type GenericCallback = (...args: any[])=>any;

interface Action {
    type: string,
    payload: any,
    redirect: GenericCallback
}

interface Payload {
    text?: string
}

interface Results {
    tracks?: Tracks
}

interface TrackResults {
    tracks: Tracks
}

interface ArtistResults {
    artists: Artists
}

interface Artists {
    items: Artist[]
}

interface Artist {
    id: string;
    name: string;
    images:Image[]
}

interface Tracks {
    items: Track[]
}

interface Track {
    id: string;
    album?: Album | undefined;
    name: string;
    artists: Artist[];
    preview_url: string;
}

interface Artist{
    name: string
}

interface Album {
    images?:Image[] | undefined

}

interface Image {
    url: string | undefined

}
