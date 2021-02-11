import React, { Component } from 'react';
import './Signin.css';
export default class Signin extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="main">
                    <div className="signup">
                        <h2>Sign up to Incense8</h2>
                    </div>
                    <div className="logo">
                        <button className="google-with"><div className="logo-google"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAB7ElEQVRIS+WW31HCQBDGv4VcZngSKxA6oAOxAu1ArEDsACsQKhAr0A7EDqQD7ACfnMll/JxL4pg/d8kRZRzHfckMWfK7b3dvdwW/ZPJLXPw9MKNoZKIlYfjcJmreiqn1GCLneH83z0EBRm4g8oA4Xkivt/E5SCM4USZyA2Ds80GILNHtXonIts6/FswommTQvhf0y2mLIBjWwZ3gDHq7IzB1Jy8kDJc7K87C+wigqpR8SfIJfIayD/IMIke+0KQobaei1isAx6V3ryCnLiXUegZy06T085sVcFK9gFGbNwMdt706NnFVcBQtk2uTN4+c7VoLNsUmdwe5D61FqaRZ/KTZwCwBFqLU1FELZV/X2a5FqVn+ZQFszW9NmKn1XsFXEobzvSpO7n5Vxf5DnYGLxZXezaFDcbV/kwOIFDueJV2+18kZ7vKBqLVJy2Xh9yA4LPdt3wayBXnS1EAcrdZ6HXdpmQY+kzBcWMPunmQnopRpwQWzg9MZbJzzjST9oxn6nc4qeRozS4FtOUi9n0Qp6xx3j8U4PgN537pbmSmm1Mg1k+sXgXRgmBFYVV5/ojXISV1NNK8+b28DBIGp1FMv9eQdlJp+a/XJg7KKnRSG/pfDGsAKcTz/sWXPpZJkv0lVXYQaQ+0V3hZO/w/8AYMr7h+QugYgAAAAAElFTkSuQmCC" />Sign up with Google</div></button>
                        <div className="logo-title">
                            <div className="facebook"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAABTklEQVRoQ+2YwVHDMBBF/+YS6ZYOoJTQAR0QKoGUQAWEDugA6AA6gA64yb7kM87NjGQ7i7Dkmd2jZ2U/f62+VhIsMGSBzDDouWbNlI4pzRAuAVxgtdrgePzu5Tj3ISL9ZxOm69+UZgg7iNwB6KDjQV6J968TOHsp2aFJbtC2jwCuR2GqgW7bA8ibUeAuoQZohrCFyMsk4Gqgz1G5Guim+Tw5RTweQD7/co/34u7BpmGUl9yL9/eTy2YkMat7DECrrC3FPgu0OJf1O1lfllLaoIG8rWnVSp+9iSRWlLZsVDWdCfpLnEs3UwO2VxL6TZzbary7HLTIk6zXu2VB/2GXLKc0eSveH2ZTOnkQSfQeWpewbdyUVhS1aiGa0qa0QoGquzyracWMmntYTec+BNhCLL4Qu1vTSGguzof+Jat7KERTDTFolWyKQaa0QjTVkB+nE7kuOdhygAAAAABJRU5ErkJggg==" /></div>
                            <div className="twitter"> <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAACFElEQVRIS+1V0VEbMRDdvR/7JM+AKwgdQCqI6YBUEFMBUAGmgiQdmApwKkjowHRAKjCe8Z2sHy3zGB1zZ+tOwmTiH/QprfbtPr19YtrT4j3h0gfwf2P+3VQvFovDfr9/ISJjIjoiokdmnq7X65/D4fAJnRhjsE95nj9WnTWAkaTX691Za79Wl7ooWK1WJ1mW3XnAzdCXAkTkjIhYKXVSD2gAF0VxxsxINLfWnsbAy7KcE9Fx5H3+MjPYQMd/gh0XRTFh5mt/OHfOnQ8GAyTfWrUiY7oA3eycG9VztXX8moyZJ0R0W38fHG4U2QW+3ARFcOiNIYCDQKaZiEyzLHtAEanAInKjtUbxjbWl6rIsL4noe4w/qLdFVI2rScDGmLGIQCxQ4CgBPBrCzOd5nk87OzbGjETkdzTbGwKcc59DAg1RnTIiqdBLpdRhKHgL2JsC5i0ksFTAKu6XUgoGsrWClgmLc85hpr+9Fakez8ynddNonHWYw8U7BXavlGoVaLBj79lt85xEQpuoqsutv5N/6xkRfUpCagZdKaV+dN2LfouYbVhe6nuLyK3W+uVT2BnYUw6BwfKCY1FPngqKO68d+w+9+uKganSJUYgCEtGSmS9DDtXWdYNq71zo7kuMKn++JKKptXYS+7s7LbM69HM8ZmZ4NjquCnkgoicRgeJnWmuIb6cVFddOWRMufQAnkPRvQvZG9TMECtsf9W0xWAAAAABJRU5ErkJggg==" /></div>
                        </div>
                    </div>
                    <p className="eml">Or with email</p>
                    <form className="form" action="">
                        <div className="form-field">
                            <label>Full Name</label><br />
                            <input type="text" placeholder="Enter Your Full Name" name="uname" required />
                        </div>
                        <div className="form-field">
                            <label>Email Address</label><br />
                            <input type="email" placeholder="Enter Your Email Address" name="psw" required />
                        </div>
                        <div className="form-field">
                            <label >Password</label><br />
                            <input type="password" placeholder="Enter A Strong Password" name="psw" required />
                        </div>
                        <div className="checkbox">
                            <input type="checkbox" />
                            <p>I agree to the Terms and Privacy Policy.</p>
                        </div>
                        <button className="create">Create Account</button>
                    </form>
                </div>
            </React.Fragment>

        )
    }
}
