import { useState } from "react"
import {Card, Button, Collapse} from "react-bootstrap"

const PinCard = ({pin}) => {
    const [open, setOpen] = useState(false);
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={pin.image} />
            <Card.Body>
                <Card.Title>{pin.title}</Card.Title>
                <Card.Text>
                    {pin.description}
                </Card.Text>
                <Button
                    onClick={() => setOpen(!open)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                >
                    {open ? 'Hide' : 'Show'}
                </Button>
                <Collapse in={open}>
                    <div id="additional-info">
                        <Card.Text>
                        District: {pin.district || 'N/A'}
                        </Card.Text>
                        <Card.Text>
                        Issues/Themes: {pin.issues.join(', ')}
                        </Card.Text>
                        <Card.Text>
                        Candidate Won: {pin.candidateWon ? 'Yes' : 'No'}
                        </Card.Text>
                        <Card.Text>
                        Pin is Fake: {pin.isFake ? 'Yes' : 'No'}
                        </Card.Text>
                        <Card.Text>
                        Against Candidate: {pin.againstCandidate ? 'Yes' : 'No'}
                        </Card.Text>
                        <Card.Text>
                        Notes: {pin.notes}
                        </Card.Text>
                    </div>
                </Collapse>
            </Card.Body>
        </Card>
    )
}

export default PinCard;