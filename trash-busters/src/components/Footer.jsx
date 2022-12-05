import Card from 'react-bootstrap/Card';

function Footer() {
  return (
    <>
      {[
        'Primary',
      ].map((variant) => (
        <Card
          bg={variant.toLowerCase()}
          key={variant}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ width: '100%' }}
          className="mt-3"
        >
          <Card.Body className="text-center">
            <Card.Text>
              Created for Server-Side Web Development NOV 2022
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </>
  );
}

export default Footer;