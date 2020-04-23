import React from 'react'
import Helmet from 'react-helmet';
import styled from '@emotion/styled';
import { Link } from 'gatsby'

import Layout from '../layouts/Layout'
import '../styles/quiz.css'

const ResultWrapper = styled.div`
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
`

const FinalScore = styled.h1`
    font-size: 5.4rem;
    color: #e53132
`

const StyledLink = styled(Link)`
    font-size: 1.8rem;
    padding: 1rem 0;
    width: 15rem;
    text-align: center;
    border: 0.1rem solid #56a5eb;
    margin-bottom: 1rem;
    text-decoration: none;
    color: #56a5eb;
    background-color: white;
    margin: 1rem;
    border-radius: 0.4rem;
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.2);
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    &:hover {
        transform: scale(1.05);
    }
`

const Form = styled.form`
    display: flex;
    flex-flow: row wrap;
    flex-wrap: wrap;
    justify-content: center;
`

class ImpressionismQuizResult extends React.Component {

    username = document.getElementById('username')
    saveScoreBtn = document.getElementById('saveScoreBtn')
    mostRecentScore = localStorage.getItem('mostRecentScore')


    finalScoreMessage = () => {
        if (document.getElementById('finalScore').innerText > 8) {document.getElementById('finalMessage').innerText = "Congratulations, you know your Manet from your Monet!"}
        else if (document.getElementById('finalScore').innerText >6) {document.getElementById('finalMessage').innerText = "Good work. But check out our timeline page to get top marks!"}
        else if (document.getElementById('finalScore').innerText > 4) {document.getElementById('finalMessage').innerText = "Not bad, but there's room for improvement!  Start with our Monet page."}
        else {document.getElementById('finalMessage').innerText="You need to do some serious research!"}
    }

    componentDidMount() {
        this.finalScoreMessage()

        document.getElementById('finalScore').innerText = this.mostRecentScore
    }

    render() {
        return (
            <Layout>
                <Helmet title={'ImpressionistArts.com | Quiz - Results'} />
                <ResultWrapper>
                    <div id="end" class="justify-center flex-column">
                        <h3>You scored:</h3>
                    <FinalScore id="finalScore">0</FinalScore>

                    <h2 id="finalMessage">You need to do some serious research!</h2>
                    <Form>
                            <StyledLink to="impressionism-quiz">Play Again*</StyledLink>
                            <StyledLink to="/">Homepage</StyledLink>
                    </Form>
                    <h3 style={{paddingTop: "30px"}}>*Our quiz has a database of over 70 questions.</h3>
                    </div>
                </ResultWrapper>
            </Layout>
        )
    }

}

export default ImpressionismQuizResult