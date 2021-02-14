import * as React from 'react';
import { MemberEntity } from '../model/member';
import { getMemberCollection } from '../api/member-api';

const useMemberCollection = () => {
	const [members, setMemberConnection] = React.useState<MemberEntity[]>([]);

	const loadMembers = async () => {
		const coll = await getMemberCollection();
		setMemberConnection(coll);
	};
	return { members, loadMembers };
};

const MemberRow = ({member} : {member : MemberEntity}) =>
<tr>
	<td>
		<img src={member.avatarUrl} style={{ maxWidth: "10rem"}} />
	</td>
	<td>
		<span>{member.id}</span>
	</td>
	<td>
		<span>{member.login}</span>
	</td>
</tr>

export const MemberTableComponent = () => {
	const { members, loadMembers } = useMemberCollection();

	React.useEffect(() => {
		loadMembers();
	}, []);

	return (
		<>
		<table>
			<thead>
				<tr>
					<th>Avatar</th>
					<th>Id</th>
					<th>Name</th>
				</tr>
			</thead>
			<tbody>{
				members.map((member) => (<MemberRow key={member.id} member={member} />))
			}</tbody>
		</table>
		</>
	);
};
