import { type FC, type ReactNode, memo, useState, useEffect } from 'react'
import CarouselWrapper from './index.styled'
import classNames from 'classnames'

interface IProps {
  children?: ReactNode
  total: number
  pageCount: number
  changePage: (currentPage: number) => void
}

interface Item {
  dot?: boolean
  page?: number
}

const Carousel: FC<IProps> = ({ total, pageCount }) => {
  const totalPage = Math.ceil(total / pageCount)
  const [currentPage, setCurrentPage] = useState(1)
  const [renderList, setRenderList] = useState<Item[]>([])

  // 根据总共显示的页数来计算
  // 一般为单数
  // 通过currentPage计算显示
  useEffect(() => {
    if (totalPage <= 9) {
      setRenderList(
        new Array(totalPage).fill(1).map((_, i) => {
          return {
            page: i + 1,
          }
        })
      )
    } else {
      if (currentPage - 3 <= 1) {
        const newList = [
          ...new Array(8).fill(1).map((_, i) => {
            return {
              page: i + 1,
              dot: false,
            }
          }),
          {
            dot: true,
            page: 1,
          },
          {
            page: totalPage,
          },
        ]
        setRenderList(newList)
      } else if (currentPage + 3 >= totalPage) {
        setRenderList([
          {
            page: 1,
          },
          {
            dot: true,
            page: 1,
          },
          ...new Array(8).fill(1).map((_, i) => {
            return {
              page: totalPage - 7 + i,
              dot: false,
            }
          }),
        ])
      } else {
        setRenderList([
          {
            page: 1,
          },
          {
            dot: true,
          },
          ...new Array(7).fill(1).map((_, i) => {
            return {
              page: currentPage - 3 + i,
              dot: false,
            }
          }),
          {
            dot: true,
          },
          {
            page: totalPage,
          },
        ])
      }
    }
  }, [currentPage, totalPage])

  const changeCurrentPage = (number: 1 | -1) => {
    const newPage = currentPage + number
    if (newPage >= 1 && newPage <= totalPage) setCurrentPage(newPage)
  }

  return (
    <CarouselWrapper>
      {total && (
        <>
          <span
            className={classNames('button', { disabled: currentPage === 1 })}
            onClick={() => changeCurrentPage(-1)}
          >
            <iconpark-icon name="ChevronLeft"></iconpark-icon>
            上一页
          </span>
          <ul className="page-list">
            {renderList.map((_, i) =>
              _.dot ? (
                <span key={i}>...</span>
              ) : (
                <li
                  className={classNames('item', {
                    active: _.page === currentPage,
                  })}
                  onClick={() => setCurrentPage(_.page!)}
                  key={i}
                >
                  {_.page}
                </li>
              )
            )}
          </ul>
          <span
            className={classNames('button', {
              disabled: currentPage === totalPage,
            })}
            onClick={() => changeCurrentPage(1)}
          >
            下一页<iconpark-icon name="ChevronRight"></iconpark-icon>
          </span>
        </>
      )}
    </CarouselWrapper>
  )
}

export default memo(Carousel)
