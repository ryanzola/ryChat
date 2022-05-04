const TheirMessage = ({ message, lastMessage }) => {
  const isFirstMessageByUser = !lastMessage || lastMessage.sender !== message.sender.username;
  console.log('the message', message)
  return (
    <div className="message-row">
      {
        isFirstMessageByUser && (
          <div 
            className="message-avatar"
            style={{ 
              backgroundImage: message.sender && `url(${message.sender.avatar})`}}
          />
        )}

        {
          message.attachments && message.attachments.length > 0
            ? (
              <img 
                src={message.attachments[0].file}
                alt="message-attachment"
                className="message-image"
                style={{ marginLeft: isFirstMessageByUser ? '4px' : '48px' }}
              />
            )
            : (
              <div 
                className="message" 
                style={{ 
                  float: 'left',
                  marginLeft: isFirstMessageByUser ? '4px' : '48px',
                  backgroundColor: '#cabcdc' 
                }}>
                {message.text}
              </div>
            )
        }
    </div>
  )
}

export default TheirMessage;