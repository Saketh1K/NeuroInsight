<h1 align="center"> NeuroCure </h1>

![NeuroCure Logo](https://github.com/ParagGhatage/NeuroCure/blob/main/frontend/public/pexels-googledeepmind-17483868.jpg) 

Overview
NeuroInsight is an advanced brain tumor detection and classification project that leverages deep learning techniques for precise medical image analysis. Utilizing TensorFlow and custom machine learning models, NeuroInsight aims to enhance diagnostic accuracy and assist healthcare professionals in detecting brain tumors from MRI scans efficiently.
Key Features
Multi-Model Ensemble: Integrates multiple models for enhanced accuracy in detection and classification.
Segmentation: Efficient tumor segmentation from MRI images for improved visualization.
User-Friendly Interface: Developed using Next.js and Tailwind CSS, offering a seamless image upload and prediction experience.
Cloud Deployment: Easily deployable on Google Cloud for scalability and accessibility.## Project Structure
This project is organized into the following structure:


'''
├── data/
│   ├── README.md
│   ├── sample/
│   │   ├── sample1.jpg
│   │   ├── sample2.jpg  
│   │   ├── sample3.jpg   
│   │   └── sample4.jpg
│
├── models/
│   ├── Readme.md   
│   └── load_and_save_models.py  # Loads models from Google Cloud and saves them locally
│
├── src/
│   ├── config.py
│   ├── preprocess.py
│   ├── inference.py
│   └── utils.py
│
├── notebooks/
│   ├── classification_resnet50.ipynb      # ResNet50 classification model training
│   ├── classification_custom_model.ipynb  # Custom classification model training
│   ├── meta_model_training.ipynb          # Meta-model (ensemble) training
│   ├── segmentation_model.ipynb           # Segmentation model training
│   ├── model_architecture/                # Model architecture storage
│   │   └── model_architecture_overview.ipynb
│
├── frontend/
│   ├── app/
│   │   ├── (site)/
│   │   │   ├── page.jsx                   # Home page
│   │   │   ├── about/page.jsx             # About page
│   │   │   ├── contact/page.jsx           # Contact page
│   │   │   ├── layout.js                  # Layout file
│   │   │   └── globals.css                # Global CSS
│   │   └── api/
│   │       └── send_email/route.ts        # Email handling API route
│   │
│   ├── components/
│   │   ├── Navbar.jsx                     # Navigation bar component
│   │   ├── Footer.jsx                     # Footer component
│   │   ├── ui/                            # UI components
│   │   ├── APIRequest.jsx                 # API request component
│   │   ├── ImageUploader.jsx              # Image upload component
│   │   ├── Loader.jsx                     # Loader component
│   │   ├── Email_template.jsx             # Email template component
│   │   └── InferenceForm.jsx              # Image upload form for inference
│   │
│   ├── public/
│   │   └── logo.png                        # Static assets (e.g., images, logos)
│   │
│   ├── tailwind.config.js                   # Tailwind CSS config
│   ├── postcss.config.js                     # PostCSS config
│   ├── next.config.js                        # Next.js config
│   ├── package.json                          # Node.js dependencies
│   └── README.md                             # Project documentation
│
├── cloud/
│   └── gcp_deploy.sh                         # Google Cloud deployment script
│
├── Dockerfile
├── app.py
├── requirements.txt
├── package.json
└── README.md
'''

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- **Python**: Version 3.x installed on your machine.
- **Node.js**: Make sure you have Node.js installed.
- **TensorFlow**: Install TensorFlow to run the machine learning models.
- **Next.js**: Used for building the frontend of the application.
- **Docker**: Optional, but recommended for containerization.

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/
   cd NeuroInsight
   pip install -r requirements.txt
   cd frontend
   npm install
   python app.py
   cd frontend
   npm run dev
   

