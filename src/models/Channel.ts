export interface Channel {
	id: bigint;
	created_at: number;
	name: string;
	type: number;
	read_state: ReadState[];
}

export interface ReadState {
	last_message_id: bigint;
	last_pin_timestamp: number;
	mention_count: number;
}

export interface TextBasedChannel {
	messages: any[];
	last_message_id?: bigint;
	last_pin_timestamp?: number;
}

export interface GuildChannel extends Channel {
	guild_id: bigint;
	position: number;
	parent_id?: bigint;
	permission_overwrites: {
		allow: bigint;
		deny: bigint;
		id: bigint;
		type: number;
	}[];
}

export interface VoiceChannel extends GuildChannel {}

export interface TextChannel extends GuildChannel, TextBasedChannel {
	nsfw: boolean;
	rate_limit_per_user: number;
	topic?: string;
}

export interface DMChannel extends Channel, TextBasedChannel {
	owner_id: bigint;
	recipients: bigint[];
}

export enum ChannelType {
	GUILD_TEXT = 0, // a text channel within a server
	DM = 1, // a direct message between users
	GUILD_VOICE = 2, // a voice channel within a server
	GROUP_DM = 3, // a direct message between multiple users
	GUILD_CATEGORY = 4, // an organizational category that contains up to 50 channels
	GUILD_NEWS = 5, // a channel that users can follow and crosspost into their own server
	GUILD_STORE = 6, // a channel in which game developers can sell their game on Discord
}
