import { YoutubeRawData } from "../../common";
import { Base, BaseProperties } from "../Base";
import { BaseChannel, BaseChannelProperties } from "../BaseChannel";
import { PlaylistParser } from "./PlaylistParser";
import { PlaylistVideos } from "./PlaylistVideos";

/** @hidden */
interface PlaylistProperties extends BaseProperties {
	id?: string;
	title?: string;
	videoCount?: number;
	viewCount?: number;
	lastUpdatedAt?: string;
	channel?: BaseChannelProperties;
	videos?: PlaylistVideos;
}

/** Represents a Playlist, usually returned from `client.getPlaylist()` */
export class Playlist extends Base implements PlaylistProperties {
	id!: string;
	/** The title of this playlist */
	title!: string;
	/** How many videos in this playlist */
	videoCount!: number;
	/** How many viewers does this playlist have */
	viewCount!: number;
	/** Last time this playlist is updated */
	lastUpdatedAt!: string;
	/** The channel that made this playlist */
	channel?: BaseChannel;
	/** Continuable of videos in this playlist */
	videos: PlaylistVideos;

	/** @hidden */
	constructor(attr: PlaylistProperties) {
		super(attr.client);
		Object.assign(this, attr);

		this.videos = new PlaylistVideos({ client: attr.client, playlist: this });
	}

	/**
	 * Load this instance with raw data from Youtube
	 *
	 * @hidden
	 */
	load(data: YoutubeRawData): Playlist {
		PlaylistParser.loadPlaylist(this, data);
		return this;
	}
}
