// controllers/chatbotController.js
exports.chatbotResponse = (req, res) => {
    const { message } = req.body;
    let response;
  
    if (message.includes('leave bidding')) {
      response = 'You can manage your leave bidding under the Automation section.';
    } else if (message.includes('roster')) {
      response = 'Check your roster under Roster Management.';
    } else {
      response = 'I am here to assist you with CrewLifeSolution features!';
    }
  
    res.status(200).json({ reply: response });
  };
  