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
- has_many :groups

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
### Association
- has_many :messages
- has_many :groups_users
- belongs_to :user

## messages
|Column|Type|Options|
|------|----|-------|
|body|text||
|user_id|integer|null: false, foreign_key: true|
|image|text||
|group_id|text||null: false|
### Association
- belongs_to :user
- belongs_to :group

## groups_usersテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :user
- belongs_to :group