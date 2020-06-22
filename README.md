# Chatspace DB設計
## usersテーブル
|Column|Type|Options|
|------|----|-------|
|nickname|string|null: false|
|password|string|null: false|
|email|string|null: false|
### Association
- has_many :messages
- has_many :groups_users

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|group_name|string|null: false|
### Association
- has_many :messages
- has_many :groups_users

## messages
|Column|Type|Options|
|------|----|-------|
|body|text||null: false|
|user_id|integer|null: false, foreign_key: true|
|image|text||
|group|text||null: false|
### Association
- belongs_to :users
- belongs_to :messages

## groups_usersテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :users
- belongs_to :groups