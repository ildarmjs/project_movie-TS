import React, { FC } from 'react'
import styles from './Pagination.module.scss'
import _ from 'lodash'

interface IPagination {
	pageSize: number
	onPageChange: (page: number) => void
	currentPage: number
}

const Pagination: FC<IPagination> = ({
	pageSize,
	onPageChange,
	currentPage
}) => {
	if (pageSize === 1) return null
	const pages: number[] = _.range(1, pageSize + 1)
	return (
		<nav className={styles.pagination}>
			<ul className={styles.list}>
				{pages.map(page => (
					<li
						key={page}
						onClick={() => onPageChange(page)}
						className={currentPage === page ? styles.pageActive : styles.page}
					>
						{page}
						{/* <a role='button' onClick={() => onPageChange(page)}>
							{page}
						</a> */}
					</li>
				))}
			</ul>
		</nav>
	)
}

export default Pagination
