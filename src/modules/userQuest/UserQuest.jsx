import React from "react";
import { Box, Container, Typography } from "@stack-ui/components";
import ContentWrapper from './styled';


const UserQuest = () => {


    // 
    // 
    // 
    // 
    // 
    // 
    // 
    return (
        <ContentWrapper className="content_tabbing">
            <Box className="tab_wrap">
                <Box className="tab_menu">
                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link active" id="recent-tab" data-bs-toggle="tab" data-bs-target="#recent"
                             type="button" role="tab" aria-controls="recentquestion" aria-selected="true">Recent Questions</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="mostanswer-tab" data-bs-toggle="tab" data-bs-target="#mostanswerd"
                             type="button" role="tab" aria-controls="mostanswered" aria-selected="false">Most Answered</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="bumpquest-tab" data-bs-toggle="tab" data-bs-target="#contact"
                             type="button" role="tab" aria-controls="bumpquestions" aria-selected="false">Bump Question</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="answer-tab" data-bs-toggle="tab" data-bs-target="#profile"
                             type="button" role="tab" aria-controls="answers" aria-selected="false">Answers</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="mostvisited-tab" data-bs-toggle="tab" data-bs-target="#contact"
                             type="button" role="tab" aria-controls="mostvisited" aria-selected="false">Most Visited</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="voted-tab" data-bs-toggle="tab" data-bs-target="#profile"
                             type="button" role="tab" aria-controls="voted" aria-selected="false">Most Voted</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="noanswers-tab" data-bs-toggle="tab" data-bs-target="#noanswers"
                             type="button" role="tab" aria-controls="noanswers" aria-selected="false">No Answers</button>
                        </li>
                    </ul>
                </Box>
                <Box className="tab_content">
                    <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade show active" id="recent" role="tabpanel" aria-labelledby="recent-tab">.tab1..</div>
                        <div class="tab-pane fade" id="mostanswerd" role="tabpanel" aria-labelledby="mostanswer-tab">.tab22..</div>
                        <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">.tab33..</div>
                        <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">.tab22..</div>
                        <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">.tab33..</div>
                        <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">.tab22..</div>
                        <div class="tab-pane fade" id="noanswers-tab" role="tabpanel" aria-labelledby="noanswers-tab">.tab33..</div>
                    </div>
                </Box>
            </Box>
        </ContentWrapper>
    )
}

export default UserQuest;

