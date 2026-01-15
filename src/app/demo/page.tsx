'use client';

import { Button } from '@/components/ui/button';

export default function DemoPage() {
	const handleBlocking = async () => {
		await fetch('/api/demo/blocking', {
			method: 'POST',
		});
	};

	return (
		<div className="flex items-center justify-center h-screen bg-background">
			<Button onClick={handleBlocking}>Click me</Button>
		</div>
	);
}
