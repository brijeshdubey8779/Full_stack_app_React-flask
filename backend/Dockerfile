FROM python:3.12

WORKDIR /app

COPY backend/requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 5000

# ENV FLASK_APP=run.py
# ENV FLASK_RUn_HOST=0.0.0.0


CMD ["python", "run.py"]
