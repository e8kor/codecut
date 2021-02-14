import {MemberEntity} from '../model/member'

export const getMemberCollection = async () => {
	let members: MemberEntity[] = [
		{
			id: 1457912,
			login: "brauliodiez",
			avatarUrl: "https://avatars.githubusercontent.com/u/1457912?v=3"
		}, {
			id: 4374977,
			login: "Nasdan",
			avatarUrl: "https://avatars.githubusercontent.com/u/4374977?v=3"
		}
	]
	return members
}
