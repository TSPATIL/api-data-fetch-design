import { useState, useEffect } from 'react'
import './App.css'
// import Modal from './Modal.jsx'

export default function App() {
	const photo_url = 'https://jsonplaceholder.typicode.com/photos/'
	const [albums, setAlbums] = useState([])
	useEffect(() => {
		const fetchapi = async () => {
			const response = await fetch(photo_url)
			const data = await response.json()
			setAlbums(data)
		}
		fetchapi()
	}, [])
	const [currentAlbum, setCurrentAlbum] = useState(1)
	let previous = 0
	const [url, setUrl] = useState('')
	const [toogle, setToggle] = useState(false)
	return (
		<div>
			<div>
				<h1>Albums</h1>
				<div class="gallery">
					<div className="albums-list">
						<p>Albums</p>
						<hr />
						<ul>
							{albums.map((album) => {
								if (previous !== album.albumId) {
									previous = album.albumId
									return (
										<li
											key={album.id}
											onClick={() => {
												setCurrentAlbum(album.albumId)
												previous = 0
											}}
										>
											Album {album.albumId}
										</li>
									)
								}
							})}
						</ul>
					</div>
					<div class="albums-images">
						<p>Images: Album No.{currentAlbum}</p>
						<hr />
						<div className="albums-folder">
							{albums.map((album) => {
								if (currentAlbum === album.albumId)
									return (
										<div
											key={album.id}
											onClick={() => {
												setToggle(true)
												setUrl(album.url)
											}}
										>
											<img
												src={album.thumbnailUrl}
												alt="thumbnail"
											/>
											<div>{album.id}</div>
										</div>
									)
							})}
						</div>
					</div>
				</div>
			</div>
			{/* <Modal url={url} toogle={toogle} setToggle={setToggle} /> */}
			<div className="modal"
				style={{ display: `${toogle ? 'flex' : 'none'}` }}
				onClick={() => {
					setToggle(false)
				}}
			>
				<img src={url} alt={url} />
			</div>
		</div>
	)
}
