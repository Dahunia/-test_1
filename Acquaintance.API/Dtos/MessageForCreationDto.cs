using System;

namespace Acquaintance.API.Dtos
{
    public class MessageForCreationDto
    {
        public int SenderId { get; set; }
        public string SenderPhotoUrl { get; set; }
        public int RecipientId { get; set; }
        public string RecipientPhotoUrl { get; set; }
        public DateTime MessageSent { get; set; }
        public string Content { get; set; }
        public MessageForCreationDto()
        {
            MessageSent = DateTime.Now;
        }
    }
}