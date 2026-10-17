# SmartBuy-AI Customer Service V1

**AI-Powered Customer Service Automation | n8n | OpenAI | Google Sheets | Gmail | Google Apps Script**

**Project Status:** V1 Development and Testing  
**Project Type:** AI Automation / Customer Service  
**Version:** 1.0 (Development)

---

## 1. Project Overview

SmartBuy-AI is an AI-powered customer service automation system designed to help businesses respond to customer enquiries, classify messages, maintain conversation records, and escalate complaints requiring human intervention.

The system uses n8n to connect artificial intelligence with Google Sheets, Gmail, and Google Apps Script.

Its objective is to reduce repetitive customer service tasks while ensuring that complex complaints can receive human attention.

## 2. Project Objectives

- Automate responses to routine customer enquiries.
- Classify customer messages into relevant categories.
- Record customer conversations in Google Sheets.
- Identify enquiries requiring human follow-up.
- Send escalation notifications through Gmail.
- Track complaint resolution status.
- Record when complaints are resolved and by whom.

## 3. Technology Stack

| Technology | Purpose |
|---|---|
| n8n | Workflow automation and orchestration |
| OpenAI | AI-powered customer responses and classification |
| Google Sheets | Conversation logging and complaint tracking |
| Gmail | Human escalation notifications |
| Google Apps Script | Automatic resolution timestamp management |
| GitHub | Version control and project documentation |

## 4. Workflow Architecture

![SmartBuy-AI Customer Service Workflow](SmartBuy-AI-Workflow.png)

The SmartBuy-AI workflow includes the following major stages:

1. Customer submits a message through the n8n chat interface.
2. The AI Agent processes the customer enquiry.
3. A Text Classifier identifies the message category.
4. The workflow routes the enquiry through the relevant processing branch.
5. Google Sheets records the customer message, AI response, intent, and status.
6. Enquiries requiring human intervention are routed for escalation.
7. Gmail sends a notification when the escalation conditions are met.
8. Human agents update complaint statuses in Google Sheets.
9. Google Apps Script records resolution timestamps and clears resolution details when complaints are reopened.

## 5. Customer Enquiry Classification

The system uses six customer enquiry categories.

Each category has a corresponding processing branch in the n8n workflow.

The classification stage helps organize customer messages and supports appropriate follow-up actions.

## 6. Google Sheets Integration

Customer interactions are recorded in the spreadsheet:

**SmartBuy Lagos – Customer Chat History**

The spreadsheet contains the following fields:

| Column | Field | Description |
|---|---|---|
| A | Timestamp | Time the customer interaction was recorded |
| B | Session_ID | Identifier associated with the chat session |
| C | Customer_Message | Customer's submitted message |
| D | AI_Response | AI-generated response |
| E | Intent | Classified customer enquiry |
| F | Status | Current handling status |
| G | Resolved_At | Date and time of resolution |
| H | Resolved_By | Name of the resolving agent |

## 7. Complaint Status Tracking

The system supports three operational statuses:

**Answered:** The enquiry has received an automated response.

**Pending Human Follow-up:** The enquiry requires attention from a human customer service agent.

**Resolved:** The complaint has been handled and marked as resolved.

Human agents can update these statuses directly in Google Sheets.

## 8. Automatic Resolution Tracking

A Google Apps Script monitors manual edits to the Status column.

When a complaint is marked **Resolved**, the script:

- Automatically records the resolution date and time.
- Preserves the timestamp as a fixed value.
- Allows the responsible agent to enter their name manually.

When the complaint status changes away from Resolved, the script:

- Clears the resolution timestamp.
- Clears the previously recorded agent name.

Resolution timestamps are displayed using the spreadsheet's Lagos timezone configuration.

## 9. Testing and Validation

The following development tests have been completed:

| Test Scenario | Expected Result | Status |
|---|---|---|
| Customer product enquiry | AI generates an appropriate response | Tested |
| Customer message logging | Conversation recorded in Google Sheets | Tested |
| Enquiry classification | Intent recorded in Google Sheets | Tested |
| Complaint escalation | Human follow-up workflow activated | Tested |
| Change status to Resolved | Resolution timestamp generated | Passed |
| Enter resolving agent | Agent name recorded | Passed |
| Reopen complaint | Resolution timestamp cleared | Passed |
| Reopen complaint | Resolving agent name cleared | Passed |

These tests demonstrate selected workflow functions. Additional testing is required before production deployment.

## 10. Known Limitations

- The current chat interface is a development and testing channel.
- AI-generated responses require appropriate business information and verification.
- The resolution tracker responds to manual Google Sheets edits, not updates made through the n8n Google Sheets integration.
- Agent names are entered manually.
- Advanced authentication, access controls, and production monitoring are not yet implemented.
- The system requires additional security and reliability testing before handling live customer data.

## 11. Planned Improvements

Future development may include:

- Customer-facing web chat integration.
- Improved knowledge-base management.
- Automated complaint assignment.
- Agent authentication and accountability.
- Complaint response-time monitoring.
- Customer service performance dashboards.
- Additional integrations with business systems.

## 12. Project Documentation

This repository is intended to contain:

- SmartBuy-AI workflow documentation.
- A workflow architecture screenshot.
- A reviewed, importable n8n workflow JSON file.
- Google Apps Script source code.
- Installation and configuration instructions.
- Test scenarios and development milestones.



## 13. Project Status

**SmartBuy-AI Customer Service V1 — Development and Testing**

The core customer service workflow and manual resolution tracking have been demonstrated. Further validation, documentation, and production safeguards remain necessary.

---

*Developed as a practical AI automation project using n8n, OpenAI, Google Workspace, and GitHub.*
