'use client';

import { useQuery } from 'convex/react';
import { api } from '../../convex/_generated/api';

const X = () => {
	const projects = useQuery(api.projects.get);

	return (
		<div className="flex flex-col gap-2 p-4">
			{projects?.map((project) => (
				<div key={project._id} className="border rounded p-2 flex flex-col">
					<p>{project.name}</p>
					<p>Owner ID: {project.ownerId}</p>
				</div>
			))}
		</div>
	);
};

export default X;
