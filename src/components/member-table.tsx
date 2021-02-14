import * as React from 'react';
import { MemberEntity } from '../model/member';
import { getMemberCollection } from '../api/member-api';

const useMemberCollection = () => {
	const [members, setMemberConnection] = React.useState<MemberEntity[]>([]);

	const loadMembers = async () => {
		let coll = await getMemberCollection();
		setMemberConnection(coll);
	};
	return { members, loadMembers };
};

const MemberRow = ({member} : {member : MemberEntity}) =>
<tr><td><img src={member.avatarUrl} style={{ maxWidth: "10rem"}} /></td></tr>

export const MemberTableComponent = () => {
	const { members, loadMembers } = useMemberCollection();

	React.useEffect(() => {
		loadMembers();
	}, []);

	return (
		<>
			{members.map((member) => (
				<h1 key={member.id}>{member.login}</h1>
			))}
		</>
	);
};
