import { useState, useEffect } from 'react'

function App() {
	const [text, setText] = useState("")
	useEffect(() => {
		fetch('/api').then(res => res.text()).then(setText)
	})

	return (
		<div>
			<div className="navbar bg-base-100">
				<div className="flex-1">
					<a className="btn btn-ghost normal-case text-xl">Flight High</a>
				</div>
				<div className="flex-none">
					<ul className="menu menu-horizontal px-1">
						<li><a>Link</a></li>
						<li>
							<details>
								<summary>
									{text}
								</summary>
								<ul className="p-2 bg-base-100">
									<li><a>Link 1</a></li>
									<li><a>Link 2</a></li>
								</ul>
							</details>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default App
