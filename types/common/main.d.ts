

interface State {
    results: Results
}



interface Action {
    type: string
}

interface Results {
    tracks: Tracks
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
