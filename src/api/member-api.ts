import {MemberEntity} from '../model/member'
import Axios, {AxiosResponse} from 'axios'

const gitHubURL = 'https://api.github.com';
const gitHubMembersUrl = `${gitHubURL}/orgs/lemoncode/members`;

const mapMemberListAPiToModel = (data: any[]): MemberEntity[] => {
	return data.map(member => ({
		id: member.id,
		login: member.login,
		avatarUrl: member.avatar_url
	}))
}

export const getMemberCollection = async () => {
	const response = await Axios.get(gitHubMembersUrl)
	const members = mapMemberListAPiToModel(response.data)
	return members
}
