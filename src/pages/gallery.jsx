import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../layouts/Layout'
import Newsletter from '../layouts/Newsletter'
import Helmet from 'react-helmet'
import '../styles/gallery.css'


const Gallery = ({ data }) => {


    const { edges } = data.allInstaNode
    const nodeURL = 'https://www.instagram.com/p';
    const {full_name, username, biography, profile_pic_url_hd, edge_follow, edge_followed_by} = data.instaUserNode

    console.log(data.instaUserNode)
    return (
        <Layout>
            <Helmet title={'Gallery | ImpressionistArts.com '} />
            <div classNameName="gallery-wrapper">

                <div className="gallery-container">
                    <div className="profile">
                        <div className="profile-image">
                            <img src={profile_pic_url_hd} alt="Instagram profile" />
                        </div>

                        <div className="profile-user-settings">
                            <h1 className="profile-user-name">{username}</h1>
                            <a className="btn profile-edit-btn" href={`https://instagram.com/${username}`} target="_blank" rel="noopener noreferrer">View Profile</a>
                        </div>

                        <div className="profile-stats">
                            <ul style={{padding: 0}}>
                                <li><span className="profile-stat-count">{edge_followed_by.count.toLocaleString()}</span> followers</li>
                                <li><span className="profile-stat-count">{edge_follow.count.toLocaleString()}</span> following</li>
                            </ul>
                        </div>

                        <div className="profile-bio">
                            <p><span className="profile-real-name">{full_name}</span> {biography}</p>
                        </div>
                    </div>
                </div>
                <div className="gallery-container">
                    <div className="gallery">
                        {edges.map(({ node }) => {
                        return (
                            <a className="gallery-item" tabindex="0" href={`${nodeURL}/${node.id}`} target="_blank" rel="noopener noreferrer">
                                <Img
                                    fixed={node.localFile.childImageSharp.fixed}
                                    loading="lazy"
                                    classNameName="gallery-image"
                                />

                            <div class="gallery-item-info">
                                <ul>
                                    <li class="gallery-item-likes"><span role="img" aria-label="heart">&#128150;</span> {node.likes !== null ? node.likes.toLocaleString() : 0}</li>
                                    <li class="gallery-item-comments"><span role="img" aria-label="speech-balloon">&#128172;</span> {node.comments !== null ? node.likes.toLocaleString() : 0}</li>
                                </ul>
                            </div>
                            </a>
                        )
                        })}
                    </div>
                </div>
            </div>
            <Newsletter />
        </Layout>
    )
}

export default Gallery

export const query = graphql`
    query {
        instaUserNode {
            full_name
            username
            biography
            profile_pic_url_hd
            edge_follow {
                count
            }
            edge_followed_by {
                count
            }
        }
        allInstaNode(sort: { fields: timestamp, order: DESC }, limit: 12) {
            edges {
                node {
                    id
                    likes
                    comments
                    localFile {
                        childImageSharp {
                            fixed(width: 300, height: 300) {
                                ...GatsbyImageSharpFixed
                            }
                        }
                    }
                }
            }
        }
    }
`


// const PostWrapper = styled.div`
//     box-sizing: border-box;
//     max-width: 1280px;
//     margin-right: auto;
//     margin-left: auto;
//     columns: 1;
//     column-gap: 10px;
//     overflow: hidden;

//     @media (min-width: 1024px) {
//         column-count: 4;
//     }

//     @media (max-width: 1023px) and (min-width: 768px) {
//         column-count: 3
//     }

//    @media (max-width: 767px) and (min-width: 540px) {
//        column-count: 2
//    }
//   }
// `
// const StyledImg = styled.div`
//     display: block
//     vertical-align: top;
// `


// <PostWrapper>
//             {edges.map(({ node }) => {
//                 return (
//                     <StyledImg href={`${nodeURL}/${node.id}`} target="_blank" rel="noopener norefferer">
//                         <Img
//                             fixed={node.localFile.childImageSharp.fixed}
//                             loading="lazy"
//                         />
//                     </StyledImg>
//                 )
//             })}
// </PostWrapper>